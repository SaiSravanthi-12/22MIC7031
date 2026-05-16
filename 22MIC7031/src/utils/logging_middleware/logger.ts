import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2YWlzaG5hdmlyYWNoYXBhbGxpMDlAZ21haWwuY29tIiwiZXhwIjoxNzc4OTI4NDQzLCJpYXQiOjE3Nzg5Mjc1NDMsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIwMDQyZjdiOS1kZjZiLTRkZTktODEzNS04N2NjMWE1NGRkYWQiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJ2YWlzaG5hdmkiLCJzdWIiOiJhMjEzMGM5Yy01YjY0LTRmZTMtYWUwNi1kMDNiZGQzODMyYzQifSwiZW1haWwiOiJ2YWlzaG5hdmlyYWNoYXBhbGxpMDlAZ21haWwuY29tIiwibmFtZSI6InZhaXNobmF2aSIsInJvbGxObyI6IjIybWlzNzIyNSIsImFjY2Vzc0NvZGUiOiJTZkZ1V2ciLCJjbGllbnRJRCI6ImEyMTMwYzljLTViNjQtNGZlMy1hZTA2LWQwM2JkZDM4MzJjNCIsImNsaWVudFNlY3JldCI6InhHU2ROeFFVVE5mV1lmVkQifQ.oRzikcMZPgDsHjps_lQZ8fL6Ab4DFc1Svt4_uUkP6X8";


export const Log = async (
  stack: string,
  level: string,
  pkg: string,
  message: string
) => {
  try {
    console.log(`[${level.toUpperCase()}] ${pkg}: ${message}`);

    await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message,
      }),
    });
  } catch (error) {
    console.error("Logging failed", error);
  }
};