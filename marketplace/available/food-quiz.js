// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS6OarzEW8zNlgRtp3y4pWBsq2SdDTtWMRRForj+qxo1o70XZRNyjYIB25aWIYqMI2hetwEE03JAxCeoT5vXfhYmRa0tf1I4WXC1gB0Jj3FU5Ya4rCzDpu2E4yzw5Lv1XDhYojdRhSB/ahhjk9wJQJB+CfmlGnV9sBaCQilUBczxJivIK3AJ0eS30GAX7MfqGkzBbem0A6zHEIwR5eE/qa8Gl1+iqfOKEzOHTZl/uuEwGU8uLtzqvWTQahuu9od2IHSkl3HfyZ6WCAaN7cW0h+sPM8+QeVhcJMZf4TjadM4XJX24RPWAjIJQ3XV3B/PQc1nyYLuAQnekdgFK+0U2hBoYAd0iwWIqAVbh8OOGsDrychQhWvCdlRRErktZe6mx8EJW4eC42O0gwd+beubVuZkIaqBPcLldVpLOeLbBvbCQNbrDe2WMqJYl4Ipqp+rxk1tLUY1P+848S7XjVa59WUFqb805Snw+euJdewtQ0WJ6ntvrTKwm42oM15qERt/VIFxnAYzF+DUEY3+vGywsVwIVKXz+iJ1d4UD2tKR4e/GtI5ZSCDngUOQbaRtPw+/a9gLh0K19F836S9l9sMH8PJvx3afDmyivrOiLRJTg+t/7MMW9AUer3gQnqwzVA2T6rrxpi8sD+ENbLdem5fUHlcEU6JS6ZbZBHOjecCDTIURy9TH+n835LYKraaozmS0xgHB71w0HcwqIoTPF0E3M7qrBC1YEF5Tyk98pS8bO5uTrwJsXVJfVvzr6TqJTF1NSOtNB23lzPi4ukepvGoxBluekzPdyoUlYYyTuXruR18ESzb/fPwDAU2f9EVscxpM4DX9FMpRVeFwS8LrcVt1Chs4EREZeI9iPGMUKJrWKXHvmcC1V5hmfnZGG+xzVrVllX1vC9/yPYkgzuSNbPVHeVND/Jz936QoHkGjE2vUW1/ZEeYm+A3s9RVL5SXCs11A6Ei9QRPPuPhajRQMRFEjaoIavDOAa1RIHvplgnlw7HOGu5s78KwEifRkYXqPP5fPN4qPudyDEt5CpcY2ayMJEAtSBZs53MGSZlrrG27kN83h86HdDJZ1z4yvZ/jELynEGqtGlG4sIMnnQ+vRF1d9tgFaDA393rDndNxA2wFwY+sg2m5ryQoOoHbqcFYjW1MRszc9c/7MNk5pP3WZ9hcZQFMvvbhVWjwC5dDzbd9nHj6kyV/RJ22v7iPaU+Pw/4d8LKWoFRF21pqwJWl3tEvhJgfo9Gg6FOI2e08Vf4lIdzNfYEp9oL5h1uBzK/ddcnrxtISMfmKsLjtV5dzHxsN//J2saobePAZkbuxMtS69ibsLo3G7YKJx8zqWPybOtaTD/J2nx5dOwa4a30UXjdJZpMKaelckvxIS1AIzz879E5K3qlNYcBJCzs9IjZNi7AygCFva32m6QrYtdRzbs11VhxItHvN7O2Iirbf+aEflksbdvwVKZk4cMSN5';const _IH='8059d7fb76acf806024d43c3690f54254043d6913b785baf3a3becb6122e8044';let _src;

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
