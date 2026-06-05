// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O2maMt8lDEXOJtbM1KmAiGbLzcfpDymdT8C8maGbjlVXIqgGDvaiAT3YrNH49LuGSGi9OXzjsCruso9hpakX+8kI1TXeK/81HdOIQVK4RljP8KJfA4VIH7+hjVrvVB67XqnUmkOZuOMmWSbBbpYimrpdLTv/jqOoZ1sPM5tvP8jumu6oV2riIPCeEIlluuWIJUrTGm2SIYFtu3/qV8wMc6ikwFkSnCucDNGq5JBsHXQ8YqCV1eAhuuQoeZirB2Z2sOQ8HvUSGnQNSwCFyXTAsqfCY/+drMLwT16p40FF5X/h4XHLjyEVHMY8rZYvQ+OWHZmdCdob1nz0324tmKMJYJ9Wz+acis/7ep7882UjZJUmd5yA36CVSn5TfgGDgTyJiZ0Y/PpjvepfYEnVuEyyezdU3y+MIfDY0Z5BRzhFYZex41b3OZTjwd9k5QjQtjfjMCDR4YoeT79ZRhywak28LaiTlPXlmHBKkIJ90NIpnw1zszWpogcl1VoC+nxGk5SxPvDYcWwe7DmVNxFeUyCtvivWgwfdYXG7QGKL8BC83zkiIva8606GDoNSqnHQCaIHUMzM7Kd03ptg6ieFvzIDmFl/+sq/uoR4rWqQ7pJ8D62aByuDmCX2oWP9f3raRuJNL0IhVhwPtILXCzwZqpR6guNC1eBhTRneBI3qWvoHl3KEVKc+uwntDwVVVqZRdzO1huZ0zPwXyJ7CU+h7851SeA==';const _IH='15a35682ebf4efb7890bb939e833196d3ae44fe6fae0fee1b8fbbb6e921602a9';let _src;

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
