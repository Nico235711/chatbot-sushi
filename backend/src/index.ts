import server from "./server";
import colors from 'colors'

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(colors.cyan(`API en el puerto: http://localhost:${PORT}`));
})