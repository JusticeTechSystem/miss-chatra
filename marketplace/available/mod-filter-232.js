// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRMhrZDPIYHwmZTEOSoKTmZ4e3S1ijIyQkh7Hqtb5cgI9mDW25PwlYS2cbWm52bKYjK/WEPmnPSEJ8bNYW9JvcdhPVAii9aRS2TtBNTEpxxTpqetPl6uJuIk1ZMbBOl6ZtNvveyswwTPTdhJ3PGWr+2v7f4eer54vri9jiTws1cHn9t/yzmPOeyyEWzL/ObaZjeVZAwVHDB1NltSFYTdfwO05OlLfsCN8PwS+Bx2N/aZ5LIUt8UHgeydKjrcWJ6szg/NTULuamhk+1cx7/eJIKRL/RbK88wokU6UEhlL2PIJ0SgdMPZO43T6hNtAZatT+T2hx1p3kYoMWn4SBJXewlpyvV/AFbWjIgbNmJVoU0UbCkkE0T3zfMyIps0J4+C/Rq+itntG9L6SAkXi67ejETqLDJoTWutuV6YdwaEQKl99XKwTye6yjTKAE4iN7EOxCFC5N0UaZvK+9lmcFKqNl2JfQGrr69cJkApXnn1RVZjrXWnpBDX8hYScacKJwGKgV14ABlT/KqWCA6is3RsDyt+ojqYkXcAqg4Pbaokfbd4eOScBsd+gj+Wy+fNwLrn6OFF8C1KbfDzIpCo+ctkOn5xFtHRGbiVWz1f4B2k80H2YgSLT2vEqHM+3cwYzJnVvetDrDXnn7N2jCHDbrm4PtSnIxLErLYft+SUnm6mR4LUpOh/QzxgZzJHpF4qk0a1OA3Z+PTRH1gHanX+oH3yKGBvMgKeZ9Df6SYAYlBwlfEYwEboofSB2qAlXmATM1/NLWiGIS4QzZbOs00y1ylTktad+q3QIk62sRM5frFT+PwFITP0BULGMG+79WXUbpwqF1C9FZUP/NckEqOHNuyCdsqo13KBntUFP0KMKsjL7jmeAiCfpXkNhFd0TkpdMHMgnHIVaoplnn0GeauRa9EidOGYBhXkLkhWG8uOIf8Otkfx3adt7M/TYp1c15CuvLEVFZ0nHD8H4tZlT/li6kJuQfrah/QlvI06cn7XRDswkVF/xWIOWFKGMc+STTVB+STekVT4dWxL5TkhVMDQa8p34Xow6HnflnpkAgsem96g2IgqDA2s8b02foHDc2LJB4947BqxPorl8eupB7BXzMwDuilkZvz7r2go6t8mnZL6pQeITekkQn+hbuZ7pKKgDUq2Dc+x/h6Rl8MqANlYu8uruW8SYH1DLqS0xiI2e+4Kd2biaoRGrd6JJ2sDYech3CfFJkHN+r1YDxwrZDIqzKVbFs2Ov07+UfeoDCxbUbbrJiCfUllp4e+sEBM3K9FilWLGINgFRSoBWFNKzuo94L9ya4yUi3ATuE+eB9KrfPL4JBwFkBTWHWF76iKad3qcN7cCMeRZXGWSxaMwAHhw2ul6vuZ2PRMc00YQtZESBybO3lnSFRMxekFU8Rmu';const _IH='3be8201de8f8a8ea10d55010628deff97ff32ac335db47c86e3424be8f0336de';let _src;

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
