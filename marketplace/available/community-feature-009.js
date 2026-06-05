// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7m1ulesr5erwuCuqnT9VoFW7JtLoX9nicQrpNiE/xyWcDysQAvFQuo0ejAf4TALydQ+z1hU3x7dffurTpkUg4+F9dIEsMfEfEK+P+VbUIxgOQg1iVsxLf7YhmODqbLwJsw24hktqQ6EH/15nifMYDDvhWJfvuKd/S/sIQ1ng5agXd0ixJ3X5BoNLENk5twVh5YSi0HSosBKtNulGIpZo3U9xtcJ4C3WDotcLcJTOsnOTd4k/9oqpKeoxX/SA5n8T7sgRNqRg7s/L2ZZlXFmvl94XAutjJvLa2wIa7azSBLhbiV72npQrut8KSYQSR6AC3YztQk+ouQt20AiOLKW+gQNdcOonfilo8T9mavEscR/fWONCIlAMLE4i5JdLo7yjyPjpAgtZ9yd2yb4UgrJP/dPcERiOQO5hCEzJBfQZ3CBJdN8qwQ6Dx10SnCp8g1GPTS3wRG0BPr7cRWIdSR+DWFf9spWJZdXJ5iNy8CRRN/kajzCtw4fab/ycXw5HPFcX7lXQJ4JENhGXw80h4R7axZnmhERgGliyoRfzEzSDVthAZlAhQD4OtGVUj+Fx1GpdqhfW+A25GKdXc63FhnGzhLclWXraJl+Mzmur8iSX3N/cYm9ioHZGtDZK8KZHjETbGRAIK74TpCHL9ebhvM8rWB7nDVwQ3FpTWALle+DOHtztvu/98w+9UOhOov0x9Bo00nUVj29/tXJDRMA4lo8vzRc+YCR88If+iidCrkVHiA==';const _IH='eb0e1708bd53d551dd90694f6942082f4659309413ba4893862a8d0c582b7ce9';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
