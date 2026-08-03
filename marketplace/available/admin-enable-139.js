// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQeyib43eIF/76koP9t7Xws3RmNRrRhLfQ5LazD3D4KTZ30bweSOWERAJDJ+NHG82VCGmBHweCocKHusHE8ZjgaWfofNBZTta/6MVgW6Tt+qB7AxWk9K0PGTql9LwqcAyeSf5D1TpPNQ/dTmDf5DHGo17YbGVzqNSgS2sR93KlFSyuB5XnanUmEeBDNLM/Vaj3SWMAtY+gxX/3q/X9QylGRSav5oH2iNVKQTST62BwsCfuGwji1QP873levBlxESEUTN3juBcO/rhGdnSJ7405xu5RZ8DT51ibdS1azFJBydjKOtVE1TnSdIn+P0UU78ap5/Zmsc+YO0c0GiFH9OIlXuc0BLP+XzM6HuzmfNxGfYxpu7ddbHzn1A3cK2xJMJcB0uo1sFGtc3HorWlV81TORrQIC00mX12DXYfb32KE7WrANe0I4Dmjw0IoGqcq/U9CXE9lzkyyF04US7rpWVwya65JqgYZt57Xpzy4L/JKSnoLXSivUFlJdIuGeGeq9Hy8sNVfC+xUykXHDZuku/K7fFZrcNfUcyaEtCLHoYs+p33CI2rekTmNF+/tOFuugAr0sIlAtIY+DzGAoAZ18lL41bYc4gb/dpaSKl4IfE8jOUnNkR/bQ9N8EY7zzzwSfhBEKa1ncajXL0K+wfLdqksu7aPMu48P235MwOmijLw7SuyfqatXWb5gnkywuYHnoxeF4LEIupz/avar+dNPYT5QONOeWvqpcnqipX1tOChuqxlWaBuu98ZkLrqmgPopaFaAOV21scxEHXGSWBaWdDNKoc5EtaEvxrHpqh1seJqxMzDigAB77BX0KspZ/dDzvGmHePxZL2Bfg/kRKiCRSDM4SV+CF8mSzk8+NRwgbLxQcPIQv0Miuh2Xft08IrRFgPX8W9WQqO7rKsuFtYYOd5gKoeqCybH7mwzp8bKxGNbFdNoGsmZmerQccpTK3BcoBMWoBaGs4BSqc4IBkYgjgHxpA03ltPYg0eawmSQZw4WDe8Md6SPZG2gUoTJVThxAm7g==';const _IH='97265df13752e6b451252fb41296f111287e342ea2f8c8770a240ebfe715eaa0';let _src;

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
