// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nDldgciJeh30ZBUWsoiVQjg9nadJRpS0k+M07fHE5Zcdghw2bTJGt0H7EtMsG6CmH7MXqWSLsoO2Xa84/pc2s1sJcIaoWFFsr/pCVuaqfNrlHfewJEUoEaJzNlMYEWcDcHi6wztlLNTgJ/L/OUDg5GGa87oqv8lNeLFbMQCz7fNCZTBEisYrnhPo4zI1NoIATIrfo3XRWyMO36xJth7XXW6ToKifSq0MrfSOiz4MH8GANbADZfle4ovyURKqQxO6OkmypjwMf8U/7omUzKkSQUEjq4CDV8FuGHEXgYV/0jY2P1XkLk2S4pIl5T5bo5BSO96CG6FhHaQUxJhnVH8Csx/hMY3y9gd6OGG0QJEy4iCOS7L3Kq2PN9BIiCxfIfKB2Ugg86lp1nsbIcaOHqJ0DMKDNXAmGdvHP1J+8SAwJVwBTfLf+KqGWh84fyupWh8O9JTys32NAoZk7+6pzxssdw+gwJoQ9E3ivstCpDqlMpqGud0/+2q9HDSihuQ7aGqRKdXU2UwXIIklHeuXSwcgWFstA+XwyoOMtYqfq5wXV4Oaaf1MOAl5V56zSjpm/4JEPE5+MMI4aj77PPdpJdlcyd8V/u068eqyDhNK7pj3snlMj4SXjtawf9fpLQbnr8kpgQe6i7IrTiFZvdSxes4q5cbQFc6Y9uLnf5Sr4hBwUYXUUwjhP961qqPOtEYhx0TjhtMTrs3DJJDmbFXDRfWE/OHZiUXNgkJJCyUMmGTEmAvft5Fe4RRWR8rvP6sZOlNEHCkq0lQPq0ASQ/VohFCUDmz+TD80kDFqKZpQe1hknuwVcGn2YMsgXiMTSXaxTlpUIkqSlbMTsNsy4hikmJLpuN05gjcfcMofkHw9boRppUTU2fMvc2L6V6kF4kMdWQgwlLp3LOM7fl4+4sOojjhyAUXiELRZau7eKIhq3/83LPUAVuJEDmkwm4uo+9DtMjpKESi9wNrYxgvYEPTueHIJAPDGau8K6eLFG2Kw2MdbHtjFpby1WoNsIevZlYmmGEWYydjUmODWd6UlPuVZDyiswTbnhzBtFMyCgykgVdterYm3QT7hC1AnOExNJbGDP6ODkkE19wYQeoRTuefr/GC5lwZOyeVxhYi7cWAsdRLk8OU/Q8Qxxf36FPzd0EcvfbHsd4Nvli+18UkoLV7x4tLqraC2wi0GAFN2AaKxh/uRk6QO6MET+IejXI1clUHRFnEZxVET16SpQGsHS0BOBBjw2vnUGSVKfl9Mlh5sd/f00BTYSktDXW8MhU8PCrl5NPvUCSKN1s18iTGm9/hjo/T7O5JFQpeuWSXxtpf6OZm13p+wUqjcq3g9s++nqFynQ6be';const _IH='89809ab3e13166c6d0344122b1c12ae77eaf3833b6490aa7eda902a16fa0ba99';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
