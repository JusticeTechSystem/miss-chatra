// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSbGJQodbuCrzBZ2tqkxYAtAGIyYoi3Nt/eWc34pga2G/OoG/iIVoY1H396Omsu8nj9wnYKZhQ1i285P4KVAoNvQv1DEC9sroUME4Gm4PeeaeNR/zR3B0GCiOBIYzLtqzdrlOvtZaZp+dCnSVe716GG1b/UemdNYu06QCn62EMwJin83Q5Eef5yLFTW8UUBn/QUeDt/zBqyFdpdh9kiGNZcSyIDluWsuYO48RDlbNJn1HSRcgQX6gYN7mhBW/NPcA0y1GUvQdalrHLXka3t5CMFT4JELtvVuy7aMeVqnvaJfc+2uKiTaD6+w5QL48fQjcWkNqfNYibX6+GoJpM7EsspkbxyiXHbvxSY7BdSiJcmG3UBbUDKphjMXaC5AMLljUlSJY4mgpsx1aydODezVAicgkTL5BioldtYLrdcF8xCg/XqKveqdxJznDOCWBW3hTEOZS88sqFozxKvzYAQ67CAsbnlSTvHZp6ftZ+pVh7ZTY57gJ93TFJXjBi77qKOUIhTup3cePZ59vCJnYRB8yMrOivv5E+gtUNL5wBZdLmv08Kt6AdBpSLQEm/XYe4yJAtc5WFFf1PzoxTbq8T1cNPd54lQaUzi6CIsPXI7kQQQIFcRp8fFGh9BOZL8h6fhnGSMMQ3daguKGvYoXWTHR7JUaBe9c2ZPxo1L+JnonN4JUzI5SYWf0S579zcHj2eNRIFcnU4S/cLSYPAqwy/veosiSCCzEwsuyvLU05OHY/PD4wXSZ4lk8m+PYQ2GpPVugFE/4UBDprDraFIGQ1YpIUwePXIxHJEwcAoIkkX2KelXEj6+sS567jK8NN7aa8UEwUdjDSByXFTLsaiuHOnafguFiC9j9ehMQ9i18mBhNOX8ERqqBqw++9SDIUFLkNQaGybvOmDIsPMccoX1kJTa52vdbf8CctY7NA4YEbS7MwTkOhcE90f6UxoBOmsg9wBeRIh+dEQ0cfG2E4rOCjfjRTzawD6qkHMEEzdY0ny7KBZZwN9mnSzjB3N0q1SUo/QwmE7TMrsSyV3DLLzPhOsF4LJ2Y9fOG03M7AQM4egbYNWl3aJFX9500RrvESYnVqL39VSXevxhodHNyVdVQKvPdUaHq9tqh9TPJMtU/5GZ4WUZqCnqpgsbeLlTgwjewzzJskf0gNLwy5T/dXokQHcwDE0+OVtwQof70kJPQ85wSoU1kDKofCdfiD403JZzfT/orxkaGbNKnzHom4lW4ZhmZZcG/4qQKXGK5ghddY1dYFDPG3lH6r1yI022udCtvopH9bKGFE1QnzSUM4vTNwPUJPzabCyDcRZw67RwntOpm3YKlS1jqsUZPM/cWLikvd2RnF7N0Z0zHwNQ7WOqVJDk3mwfnzmWfpp0whtZwtcJ6sexJlLtKwdpBpwb5DgiAFk+djaOB6vM';const _IH='f35367d0ec0c5e07b4f4f10b22387ebf4702376323f76d53a715fa378ac2e3a3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
