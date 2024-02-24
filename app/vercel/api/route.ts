export async function GET(request: Request) {
  return Response.json({
    data: new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
    }),
  });
}
