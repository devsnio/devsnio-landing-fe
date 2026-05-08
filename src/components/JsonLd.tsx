/**
 * Renders a <script type="application/ld+json"> tag for structured data.
 * Works in Server Components — no "use client" needed.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // Next.js sanitizes this for us via dangerouslySetInnerHTML.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
