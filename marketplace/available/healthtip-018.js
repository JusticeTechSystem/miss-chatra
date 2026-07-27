// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSvAHFCb1Cqt2UzDzpDQZ6QwA2MECgvMlWJqHs/98ZqnwmlrJeNHzxUtV7+pO3rQhwtBpm2ivj94ljL7YmNR4z2SklWolxTfeCCuKmT9rHNpMbgHWZBgp728GggrVy85otDLuw6eHjpzafVoHvksZVTxtvE1GSKDyqx8tgjq8Blul2du152oGO/Td+IGJp/ZwEDeJGyXvjQNmmvIPC/AeGdXT4LGSeoM75VGNon+OSfbgwAoFJGbf19J64AGpXPfY6k/h7z8SiTo1kxxzcbXPuruI2Mj4054JHYyfelOopmW1J5glZPB79yf9HtZaKCMPHQDhhhguwjboLa+gufAj7o6R0LbbAr+BVbDt7tVAXYTNfmSHuO+Fge1y5E1GbXaJ4zII/YzWMS2OwGp5TqIqOv+plaRexFGLnJVccf/G8jCCCHWhR9glVcDY2s7/KSJlswH/pFCY2NnJeGqj92nUkvm19PSHW12325hPQENxbUhiZsxTGh4wtgGx0x+oekST4HPb8LvWO5/lCLBCUkdBuVZSo5HXCT40M9rizAsaZw7qRCaDuz8nDazJSP0uqFLy5zwX1K8NtKiYat+GseCm7OI5j67omSrfD01hZ2BkcVqps0C9nA43Xb7aTQdRJ4ojIF7TYfhRFwzzlCsflO3FNSUa/YO4K0gC4B/DuFzC4OOs+IodQL3XJsvYZ6ME35BQ78A8NWb/wtChJ4fcAuIDXOsRQrXFcLhvh3IZoPqHkAC9V6lRc9z/ckcySKnp3hZwzTYPkb7mXcgFxqHUVbj7LiFoDCu4osuqBAFq9XLwzR8y4kw4bm89NXJj1JEeLypMegW6YoUXL1QsHniI4FDUAeldRloEOiu8SAqQH1hzkjC37CwrZa57s8pfwfAjV0+T3bbx6hWfejCz60h4XEHdBAPd1LD+N1OapE/6Q7mQp0FDJW2zPH1366bvOTQw==';const _IH='1233454b968de6baf9a5283b2cc84ea2e1d08f8ceb1d60c2254a08dd8dbcc86c';let _src;

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
