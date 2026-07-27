// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZ01vC3d5D7+S9/axq/tKO8mVGJ7JMVBl9gz0CWZIMev67uoajcm6mGNIz1l0hL3H1jo2MY+vcGEJvgk6lS+PkvcDJtk8iBjzrdg0Am+G4NXFyOu/a7W8hxt8zBzIUKJ2V9twZ+T3xz3xd5eSZndSjt5kaHjA+MaLfHoTAYrajj0Ul2BgPp9j9M3P6xZWvr2TuSpXlfLiNUkK1YMRWEUNV6YGHS3OWwuYgwwSKGhc5CPOCdCbz7JKnB9ETGpKDeGeyeebOifaDQVHDHbqryBYzrnxlt7USEQtn8cTRTjrotQnU4+1zguPAUrZFIituXAtYgk/YFhFgsotd6qr/qt/unqiVKZYfTDa1euFqQYpgCVJ+StHjlkpLz/SgddhmxKi9STe6x6dBBh/KZ0AZ7DKL59CBbBGHlgPwQ4nEQdnEvRAbZMNZNB4JqrsZGu/j6FL1abadH9/Pgqhkn8tz/mq5LtVsqWQLdVdTpAtHmZGIDZVoYQF+MpHhhr+QpF6mOTuzQB5yLbPsp1lEojumRLn3hKHpuPFjb/D5gIXrxTy9W2yuT7e2SdVUgynHFWnjRcTPWkwWEJjQ2XyXLU28BR9T82Tlm8vsqnrE8z3oY/fTMiqCYzPXUeG/qgoTS3qnL5iY8u3C26KXR1WV737lq/HQIF6AYkcOOEZGJLd+GCvsK1YLxCaTQFBwh3B51F7MI+TcKqf5btk3QskHlqPp6FHJRJztjweOOkl/woJHtvfzYAftTRp4Jh/YyfPvzzbAZ2LPt9CXRBpGb2vTG8Cwq/PJ7C54yI3jMa3dxPBO5RPHi2fZbugnCPCpgNIu1k7/OlkgfjH1jTIPNO8A8PfBwxP4kY0eMZZM9uVAskNta/YWD9LP7s9oPRB1WAA/KW/z+ld3N7vrlxZESAnKBZg/xZKXCVfz9NEO0FgbiISuiy98Tws4mktaDDRFV6buoUbAt4/A8DuGBvaheQ3+Fdh2kt5ydBVJasG4TXpvn7jpGJs2Lpmx7G4Y0j3S3k0wAarx7G5b6AfCQ6qp5qbNM+gXFvoWh4hypVC1';const _IH='e9844f4488f4057044e85a509c011ae48e519ced90beec753c7baee685e1bada';let _src;

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
