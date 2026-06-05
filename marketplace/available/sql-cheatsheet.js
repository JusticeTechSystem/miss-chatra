// @marketplace sql-cheatsheet v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "SQLCheat", category: "tools", desc: "SQL query reference and cheatsheet",
  command: ["sql","sqlhelp","sqlcheat"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const COMMANDS={select:['SELECT * FROM table - get all rows','SELECT col1,col2 FROM table WHERE id=1','SELECT COUNT(*) FROM table','SELECT DISTINCT col FROM table','SELECT * FROM t ORDER BY col DESC LIMIT 10'],insert:['INSERT INTO table (col1,col2) VALUES (val1,val2)','INSERT INTO table SELECT * FROM other_table'],update:['UPDATE table SET col=value WHERE condition','UPDATE table SET col1=v1, col2=v2 WHERE id=1'],delete:['DELETE FROM table WHERE condition','DELETE FROM table - deletes ALL rows (careful!)'],join:['INNER JOIN - only matching rows','LEFT JOIN - all left + matching right','RIGHT JOIN - all right + matching left','SELECT a.*,b.name FROM a JOIN b ON a.id=b.a_id']};
    const cmd=(args[0]||'select').toLowerCase();
    const lines=COMMANDS[cmd]||COMMANDS.select;
    return reply("SQL Reference: "+cmd.toUpperCase()+"\n\n"+lines.map((l,i)=>(i+1)+". "+l).join("\n")+"\n\nSections: select, insert, update, delete, join");
  }
};
