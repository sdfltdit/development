import type { APIRoute, GetStaticPaths } from 'astro';
import { infographicNames, renderInfographic, type InfographicName, type Theme } from '../../../lib/infographics';

export const getStaticPaths: GetStaticPaths = () =>
  infographicNames.flatMap((name) =>
    (['dark'] as Theme[]).map((theme) => ({ params: { file: `${name}-${theme}` }, props: { name, theme } })),
  );

interface Props {
  name: InfographicName;
  theme: Theme;
}

export const GET: APIRoute<Props> = ({ props }) =>
  new Response(renderInfographic(props.name, props.theme), {
    headers: { 'Content-Type': 'image/svg+xml; charset=utf-8' },
  });
