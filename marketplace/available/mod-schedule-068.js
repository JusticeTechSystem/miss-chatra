// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ItH3dXAImPBQeryoiaUVCOik2dpKoW0jOuQaLqjp8p8g58lnxpKOHMIkLq+OxF5Caa8ivFK+pk6SGySAW+CGBjftX3uDfTtalr2eN/Wyau+BWvNqJ4hKmTgxTSPeTFSj5sPHtwy4xLQjnttmoitr8SO9k06jUNkWH/loxs/WttvZDEe7ub59CfZiA0lg4jn/8mjb3aLnhYU26C265YdT+IPmA3Qlme1Hf4drq7u2Ujq8Jv6XmbuBJPpxhD6WxGRaO9RGc1KpOWfPEwLG9MmXnPJDY+nXkbCi08es157fzxxvH0Fq+05FhHdqRKgjdGNtzsy7nDvcIyOzGzEt9MZXWhs2Nc4YyQWpl5C5OWxI07AW4Qu03Jx8/KMCIErrozl28F1KKm40D6bIYNNdm+Vn9M3Dwuj0oND6U/TS4d3hzS8ICuPmEfGRGwmy2dJnzBqR+roJjUbwvSCURGjAU8TqRZWa13aETybnKpsNco+7Q6iFCxxxlWi6qIlF9TwBwcn8srvQ8q3VI5lGyCHMPZ0hZ2Jqat1hk0Z0D4Rj2ufW6CUBsNM8P7QOGrDqyQNIAJum+PvpmZbMJXbunbgi9qSZOv9LZDZa/9tToGGHrIGdo0zEPYBayLePEC+V8DEALrXf2DU39uWApX6BbY8LvD/2B9+2GPqkcJvqMzULgu+s4kGW3c4OV476tpELFZeJ2bNjlRCkbLWzTyt6Rg8PWzKNGvgp1KOa3q5qqNwEl6PnhpT/1GoO22BGnDuvw1HqcdKYdk9BJGUBN5D3WAzZ/UGv4e7SpZ8uUEEVPv9qeth66npdrbDDSvTeH7bEsqeuHQCnW5NNeQihWgU6Zr91v66cJAqMLRN0kzJOmratShgGobQE2QSeyq9UIjevn3R90FFOh1LlIbPX7m+d1Fmy5bDYjd7gzBiQoUXgOv0CS1QjU4p4eDyO10SxHn8bqxwx3mZ5dX9AoOJl8GckFcs8BefwFCt9t1jtZYAfpC/2+wFZ9UM/Gdhl6PoWMydr1nJP/cAJyaPLsQYalL4YWKFYsleGC7KAZB7bS2Uf2IRdrvZi6IqFUSVl8z9tNFNYIIawParNW3IaITi/Ygl9NRfC+Yt3vHyKPsRehNjsmjrDxsqX5tOdcCvc0wbhe5IFD/3dqDt7OiXesa4eCSbHfP7W6WzmPXe93nEOSWiSEvDyDVVU47383kojVv3KsUdrSXp5heJ7SEdIuAJPSvIzGDzTS7JWC3vIFbY0zEsLvwgDq+GrP9VLj3YidkIrNVASblsqfoJMq/ywbkjAi/6YgimeVFeGF5usDWd4avl/F/UJ7uMdwZj/4MqDrWf+igFPRGfUZ61EYwnBHmKewQ3L5iOALhbNsFGP/PmeMRXeVKS2jB8oWOocMNuFynNR1Ai5l4hh4vSNo/N9a6FgRw==';const _IH='ad02c8935793b6ab96a4bd2442e2028e3970cd3ee3e02e9d773fccce5996f27e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
