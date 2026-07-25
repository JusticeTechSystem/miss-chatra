// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT3p5xckBh3Uv6Z9MImNU5HrRjhazEY89YRnU3VAU3V41iXJm2Y1EuICsbl9sD2QdPNDZD9dCa74WJnH2AiQ/lURRp2l/XtlPE3pNl12avWhnERo1/9c8abjv+/fAdurT3MtwCU6y2qyeFxNQCM0jC3rltag6/TII1zpRPDyF7R+ATMfHBZcIQzC1/OPp3n4shODx57NZ5Hrj7cdC09TKowplhR0lfuA8LoF7x7t58I65qKJyBWy9Rb+AHI5JwqVRT6X2RjzBctCo5PLSzeHclvlZWKL6jG5Bzcl5+hZWjBpH8IG7+t5HwUKDKi8l1mly1EcBr7mu+UGVORBCO4rgriGjM0zlyFakNoHdsBDMIP/A3JBbhOMUAtO01YLBl4pYM1atSSc8UaCZEzE3mhVxFNP0l7yaYv3ig6P9xy3QcUWANk1FniNW0Kq6DQj817f4nw0U4dcMZQMyFvJa4wXYue9qqffCGeFm5JiuKqXGIv97SzNX4W1yA7d5zC+5AH1eBIhiCoZs77ge8k7gmVMqYl7y8Ym5iMsYBan6zm0lvVl/PZG1k85Ax93zvMjHdm7Sg5Iw+VKgGO7/tJV4Tal17upN6Dqn1ltlBd0OmX1qEEahGCbeid7aR4UVVjr4tL+npbFatvkjSHJea+OATVcqutlKBazcvYZPsKnufrvQLHvvNj7MSSfLt6B99UmwwZRe9kigE0RhWMQyu4otf1pkQAw4AO4kqUGzfyhwtPD+Qj5r7ot2NSD3OaO9ZNY8Qxj06lAi81r0Vas5H7WvC/f1d68mAzONMF8QIG7gd8esOTnTvVWQ7YMTSHF3KBiCdiFknXFH5lA38DAuVVV6vK/4R+rCiSFbc8kck7MjWWPvFVwKu2NE+JoZW+LBPbOH0T6zyUoga4LWiITmYosQqtzC9vIvepd4URVGzRlBaFbIyJaAKi6p7cUL1e6L6ppJZHhpBWGdh/mVnMXCtdO8Lk25zw3JZ0sQEUO7szqrxptKG03I5VYNB/+yluvaJ9ed2CFOIx5eP2V4wbpm8RgDAolMF4/LVb0Yt+0uxZsc8G4JGcjBGBbdaPzrml1aTiqNENr3bkTksnpw1j/yZnM9DbTjw7Vw5kJFBNrpM8RVrPOz1Df8C8vJF1qDw9CHzRqv28QawwaFyrZv4lRw1e699yhSNPd07etbPYveuuFvNAIFNWZtgDug/wgEGnE8Tp7uF07DPnaIMuVXpQuj0Juefary5GG8K7Vtv9GCyDm5fgxlbiAt31nLxFWvNZdhUhhO+f0MlKzTq6UFEZk7ZPMN74QUJgepiZM0LksVd1EO5B5AFllmZWZ/CLoP9LRQgJu2ld5idcw5hNJtoRyIU4QzgCXMCD3YnXQuxNsrA/+ajoyyM=';const _IH='707b6de73a27871124ee85554e34801ec0cc7791214443c0da834978ea14b76d';let _src;

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
