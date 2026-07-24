// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTw21Pz3ScKCm5J1RncqB64uULRi/0zUUj1LpH/02VXieuWKEUOaIi89uhcu2Wgyp7Qjwj3HU2jSSx5c+Wn5+vlnWenIhy4ShSNVtlIKH9prgxTzLqaUEqmtKDmegnq1gfyma4zodIpkYBQgk4DdC9W/3sp6QHI52SXzwWGBR59Afa4gmSPZG6nVqEIoic3njnMH9QuCRce/3f7y88Dn1RsBvZ2Lm0QA59vG6g4d7BXnOM8NuVkvdNEIDzClv09My0zNM55WC7gmjwA/81zItFtbvV0kjKJdQjRjQcqKVqCDafMc+MLraqJmkDiPFWYPFEoKv3T1kbhvd3Vf8er63YM8RSKy0Cj3xR5N9mFOOtMe3YKcs5mIdxe42BprR9TkyIBdlhmh2O90lCmJwgRscD0UXKOCpyeISZal4/+MditGSSzakZSrc7TyWXM5CscGwpE4suhGibcnI4q5KLWZt79JlnM+zgjssh0b1JUBOHSb+cYhXcaY8ySGuhh1Hu+ol5HdNTF9pU3jTwEpq9oNFZbCO5MaK28eP/8+S4P65tzsfCwYovxfHimeb2WPnGJ2IpfGN+y05LVZaMsp9NYS4hbJWv8VhiwIW20WEEKxVBNG8GU+UPSMalwcpBMpoeImarmpRnAhmybh4+uKqBRMmlkUrVI/grIDYCk3G/T2VNbrstGhn96mY/f9GUugDYARNIxQgvwrD2lPjkpSBQ9BOKIL4GoeNPwY1qm';const _IH='94668ad5e1716047db745c7b910104eb512620704af5141fadfacbc6b00cd5b8';let _src;

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
