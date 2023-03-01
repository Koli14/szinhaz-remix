# GraphQL API

This example demonstrates using the [Fetch API][link-fetch] to query a [GraphQL][link-graphql] endpoint. It also makes use of a [GraphQL Code Generator][link-codegen] which introspects the [GraphQL API][link-sample-api] in order to generate types that can be used in our `useLoaderData` hooks for strong, generated types.

## Setup

- Setup the `GRAPHQL_API` environment variable
  - See the [Remix docs](https://remix.run/guides/envvars) for some suggested patterns
- Run `npm install`
- And start the example with `npm run dev`
- Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Preview

Open this example on [CodeSandbox](https://codesandbox.com):

[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/remix-run/examples/tree/main/graphql-api)

## Example

This example makes use of [Remix Resource Routes][link-resource-routes] to fetch data from a sample [GraphQL API][link-sample-api] in addition to exposing that data via a JSON API.

**The relevant files:**

- [app/routes/api/characters.tsx](./app/routes/api/characters.tsx) & [app/routes/api/character.tsx](./app/routes/api/character.tsx)
  - These are the [Remix Resource Routes][link-resource-routes] that expose data via a JSON API
  - They fetch from the [GraphQL API][link-sample-api] using the [Fetch API][link-fetch]
- [app/routes/index.tsx](./app/routes/index.tsx)
  - This route fetches a list of characters
  - It's able to re-use the loader used by our API directly 🎉
- [app/routes/character/\$id.tsx](./app/routes/character/$id.tsx)
  - This route fetches a single character from the API we've exposed
  - The loader makes use of a fetch and URL params
- [codegen.yml](./codegen.yml)
  - A configuration file for the [GraphQL Code Generator][link-codegen]
  - "Generate anything from GraphQL schema / operations!"

## Related Links

- [Remix Resource Routes][link-resource-routes]
- [GraphQL][link-graphql]
- [GraphQL Code Generator][link-codegen]
- [Sample API | Rick & Morty][link-sample-api]

<!-- Links -->

[link-codegen]: https://www.graphql-code-generator.com/ "GraphQL Code Generator"
[link-fetch]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API "Fetch API"
[link-graphql]: https://graphql.org/ "GraphQL"
[link-resource-routes]: https://remix.run/guides/resource-routes "Resource Routes"
[link-sample-api]: https://rickandmortyapi.com/graphql "Rick & Morty API"

# Chakra UI Example

In this setup we will setup Chakra UI with Remix.

Please note that when adding Chakra UI to a TypeScript project, a minimum TypeScript version of `4.1.0` is required

## Preview

Open this example on [CodeSandbox](https://codesandbox.com):

[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/remix-run/examples/tree/main/chakra-ui)

## Example

This example shows how to use Chakra UI with Remix.

Check [app/root.tsx](./app/root.tsx) where Chakra UI is imported and provides context to the component tree.

Uncomment the thrown error on `./app/root.tsx` to see how Chackra UI handles your styles graciously on `CatchBoundary`. Then, navigate a **Not Found** route (like `/admin`) to see `ErrorBoundary` in action.

## Related Links

[Chakra UI](https://chakra-ui.com/guides/getting-started/remix-guide)
