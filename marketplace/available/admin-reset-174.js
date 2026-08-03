// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTUmH4U/JMUY3JCLUHj87N+cOj/kPkB6Vrl1syoR2USTpGKaLZYqL0h4CuLxXq/5tVhLpNPKmRk41J60ORnhyDfTsVaGT6oXKwsVb7Dvg8RwNH1eHO7r/SD8Gi5xkcZ0mZ2ocGoe/BAObPTFzmoNe8wBu2ht2AqKIfC7ZwPfEOGHFsffIhxAy6kyfmsG/8wN2MSk76S/ysDGH78t1c4TG/wRpXV6d6Bcsa6tVDk2Tn8JgcBJS3Ob3DH/1wgpj4A0PbeKGR3UE+EZ77+VLcka3LtiuGLyi5nwJtv0gPZzS7RujjXhMd6WjvS8ZpIbvU4sqVU4PnQxaJ1ki+pfkDDTIRLNJK484vZliiAndDfn2QZ+CDSnEqvUZOoBh3c1obe5KAm7vOeGVvckhQq+Gv6tia5XPu+DgqQuTa4tFmIX2gfE5ISvVZRp12kFqtZf2h2ufsY+Rpa+tpZ3T5wo+dj+sZHW/ZKg9XWQB9in76ygLBLfkUK6DdVmnzP9cgH/eahVdxw4u1xyVykvraxhUvhkUza0ZgnU366QiOJSSh+8/XGQZW8NT0/Bi0oeFBHkLhuvHPwvrfpVDtD/Bf+Y1/OMxrH2fe9g8ZLy0nP6sG6WP2qwCLJK1Tt3ta9LlGXpUFj4cTJmXDIX/Bp0WSnAzwNvfp5lZ4bWG7FsD3Nm/nKXVDd+amo20aQ0HldUEW63KN17JkDSsKZfzD/Xk5ND3WVvSzGvljytkAc3pY+jgPjzVfMwipPmM3nIU+3x2/XDiW5Qsk3AEbggsSIGOxHwqnWaWqf7twuiBIVifI04dEX3Ck2AsQ9OvklPFLY4kxem0QzoQCGQ0qyrHl5tH0Hhnn3bI/MZFFZiujy70MR24tQVozr4+cokSFG7Wik92YEpnNs4YHD+F2WpCNiYWno3KfTrf0V30si6HqzeRCazApjthh/fmmo9SjqIarruw/8WlUSbOT2F7j6cY7WLt2J1iSaWtmG3+qkFltv5E+dlan97AgreD4ALHudbWvf';const _IH='fec81e25fb593f46cc50bc1a4fb74cf8b14c2eceef4e19edb0902e46c8974c1c';let _src;

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
