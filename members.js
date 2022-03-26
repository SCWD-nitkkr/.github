const fs = require("fs");

/**
fetch GihubAPI
**/

const cell = ({
  login,
  name,
  bio,
  avatarUrl,
  websiteUrl,
}) => ` <td align="center">
<a href="https://github.com/${login}">
    <img src="${avatarUrl}" width="100px;" alt="" />
    <br />
    <sub><b>${name || login}</b></sub></a>
<br />
<sub><b>${bio || ""}</b></sub></a>
</td>`;

const output = response.data.organization.membersWithRole.nodes
  .map((item, index) => {
    return (!(index % 7) ? "</tr><tr>" : "") + cell(item);
  })
  .join("");
fs.writeFileSync(
  "a.md",
  `<table>
<tr>
   ${output}
</tr>
</table>`
);
