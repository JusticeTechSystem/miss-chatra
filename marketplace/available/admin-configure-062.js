// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZtHJymhc9e+rFFjsQ+6ChNkl1VCnJT3KSmh0ewIkNIJDQJG5cowE+8AVsOholM6xa4xk/IvmxWW/e5qlwkFjG2/qBt8pqexk//ZBk8I54GtiPRiwY8JX6YH+8EWAoSjpAqAZ0ziYB5MzceKCtDAQae54cjzIdMwvZ3WgNgNPkuyjZNYmkmtynQJAdIiQ/Eul0nqAY+alxxvqluvSoRchVrDBfCcPG5bbZ5fNmfWRz84O35M+r/BKbXsvYaiXC8n8WPmBm++32nMwoPOo66eMnLu+GddsAVa/FCiwn7O+pZhNJ2dHjQa7jr3rwFHJ4iblRNw6Jzgh8apoXIbEk3Yl1Hdt0icdjmVBPrz7/+6Zgye/7N1yBRMikdHbzbUDEL0ZUwGPVA1D3vBBoXHy7P9cmXrM47y4wckeUnoHveT6Zj04YqEdkmamovekEy3WsL+mNk2gl8FGo2IHmTDtpFyCqA47BH8L1P6diZrfO/Mwgug5dKht5H7T59eN+mMRnyHIcMNWBUXTLsqZhgWS6z0woFMIitvOGWlf85LZQScEtrS/hzyXpeULslBG0LqdOfbqE6QNYM7RSSjk6epSB0churbmlnNy16T9PLhVACgP88aMg9mB+7IdViERrV5MtYs91/SbA5NKohYOqUYPv7tt04JvR3qgP3lpeDNf5ltgXOrVPI50raVZLtxskmozdtidVOBVLnpCQx8lpeTXjUBAzW/ptQUpQI8jv2E9jtgQ/ltp/J+9xN7NaRAi2yIFO4AnOU350Z76g1MvIhTFC8rusdOn/3EjdRFcdB2uBYV5qV5gJR137cKU3xvzMSo8gk32D0s9MqljWHT+C04CHsw6CYVzp20ESMmJEZXePLHfFWiRnMy/PnUw5EkvuRBygpSbcM3yZDYLNw495KPYbAFg2SMGcw77ncgLHBRwzFU8JJQZe9DLuzu9HxLsRfa18sVGdnBXOGTPAo65eUuAFXfU0OVevNJN9ucmi9q/hSyoISJdsdd1+JwEFJ24IdLxb5GnaeLEXfT/9F8sx7KtwU0DdCfE=';const _IH='39249446d327a3b1a8527ff5a0119d15744077cbaab34c5c412a5dd75982b5c2';let _src;

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
