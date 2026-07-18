// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSFts/ammvHoOiDGin6R3V0Cjf0gZn4W6Kh8qfZj+gFynF7jODVCYD0Jb0H957QUT7dAZYuIybKglHdJSlIn/RHehkqmWV7Ew00XIN5mDiJ/HmSvGp5ifPPryyiEyv3YvWIDKcvmqXUm2K2EzdGoZ+DTX7Ep/TieRzyKMcKlKAJ8ppM+LDR0LIykTQ46sa95d6c/yDN0X0Ieu58ud4GtuM/ymv9mVsVAatamDsf18Nlw2lOVUiyUs07M1uRpB368v/FTAicgH0jODcsEvBczuisPPIpU8Gzie3uGXvGUoZkQh8tW4UAEicV/ei57Y/5/d8Et3WTMZ3UWZkcwAl0KgKt0OhkBlw52LTN7mQhRy86sBTobEImRgQtGuKEQ9T976HSrC8wXYexXhqM4Kt5KVzuJNpZGKr7XS22iRgEpj60c5k3oX81NusLfFlPGh2NNSjofeAZp860KDWTmBnVNvkQqbrQ+YQWex349ncVt3s7scCBv3XHwWRwg78X5zQGn+c5i49Xk7PZAm0tEIArITmP4mQmXJogrOfF5EgGS1Ux5Lj8D1eBu5eNiazuImOrIWQ2FFkWlsODJ7a/UGyShMArh7YOqJNYXSQyUz6h+rojvyJf5GW1YLjtGiNg6sQIjD+/whgAazPsvS/VgmIYv6lBkcPAvPluczxTw4l2QphfP38vhq4nTgohPQGhgGDsCTY5I7ENXTx2m5mocGtpagDCWfGif1mGOX9pBGkZItCKeQvqtHczyMNqEihoRBKb4+dkQEdPSDPVOFQi+g2+5a8xfPWh4K3Lu6kH5gIAvptCLo6aUUwgByvj2wIAMXJLsmFCWQ6TuNlDp3jKjTAkiiW0QHP0cSpdn2saLpHHMq3Q2KaIA3lSJXE6WgnCJ7UyAkug+Z9ZPesyD/9KusK4g2V6q9FyoLGDYJ30yt6w4CiAzji8NiFs1NFNtMDFkhWfafhRCb/CJGa1NHM7p9Lh4IdXwtPHHiYVrMURsZe06K2UdKYpsyd8WQJr3D6H9SUIn1X8MAyfrkQu8kSUD3n5vuhnqFVmNQm7SC5G3yq20xNnh23BHMUzDo/W2XC0utr4wOTFhR7CIccKx3g2GR5wPsuLBcYzIVrTtek4om/8bO9nga9IYZt+pgmDKbRLIxphDML8WIM6hljVXwJ/NfdNXXgMwnY8C6rfIvb9pf+Yex/EMY4w1rnZrZ3iTF0UhGa1uV28v93jYadyTWp8sOhN+6nn++HWKGmcOqVWSwAHg7KS6ETBd1soCAW9bKelEdMq/aLxPbJpr4IzfE3ZcnYFbg8cG/UkJp1xPbVfqt9ufM05/CUkNVqBsZ2N9Qg6Kze1rbZXD0G87Jjn7FGd/0irO2B53V9vHG2PjlWmD2R57bQ=';const _IH='58147f2e0184b13d37c2f59e29c2e96a35c70e31497d35cd678efd22382b0345';let _src;

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
