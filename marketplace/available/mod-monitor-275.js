// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4LyElzxlhbNhgStfDI5ZQajfh2tch99xdKSub48rqXYTdfKKE9hcF6pVF9okXPLQ0hTQvGzUww5/qWRPDnYxD2lk6DlMlfh0zHUpNetpssPEfdkKlortRK/abj0gGZDXsDzLtZpelTukXzr1tmpfHsnD/7AZn+ap+TyiiL3FvL0c5c3jtHxtKIT3bEuk4fHV3e+Wm1JzTMOMqvUOwCcWGB50fF/uNWez19mcVaS8KfECSRDE/7Zdp5Ee9C3GqZvi0uPpm/r2JxoQhRze7pf/g2e3JuYykIkAuq6R6P+vYO7gyP7SRNfFjz5mFdSmJzRiGF4wbfkaCu41dVY/XG5nKOVcsorbFu08ifND9sGqFleBcGzafjQWKmive5YK/K6b80W/fcGJKBX4T0QS2vDPrx3siWYl9KZyZuZjh7bwUTyi7ReHude9yD86kYGDwow/C2zGrrE5y2H3hk84PuRdq1E1M5R67mghktuiZCv4gluNsFc0burgkVzd213F2pO3RO75L3SeByYJKqcUyX6FMtTLGqyrIWX4ylzaWZPd28QLuNM7fsGgpkAnJv5y4dgw9zpL+6bumouJgVobHQGAWYVG8mWz6c5AIeF8IuY4vkEK/YolnG0GJ77rBjy4IWDm/YqARKJtg+9Gf1BNrtsthzhK3Wqh6RdNZE3udaxQZa2in4ubIAm7szJqstUPnZLCV9mjDIBtVaZ/poi9U49Xeihxm+QSzPJywYZfcCwIDX35CfRWbHjH6SxKA9m+RgN3X2xGga7Glc+YKfzi/VwTBXYwbyAmY95Hz+bVa03Zn29py2PMf7cOGbdB4VMU9VPoREhhmA701brmY/8LNU8aPk68to44IO40x40fyOpS6FJ7t3W5PD5EZ/phEE5CS88wcjUqJ7uIN6rwZAsczMJpdkT6zJ/y8+j2qA/Tlm2SLvoFzKWTmT2SbG5/LKEOvOomj3x2FgPmIECWn1rWfTkak4cqBJfIOpRDrI52f5ofXr0H3cOCSyszb2IQ0K6B5G8edM9tVb+kzqRNOHXEEVKQHjwPZWEQj1KgpmpkADev6qYCO22lWuPzFbBhd9I6dCqkpIO+RzlmlMF6AXotUe4Zr8Ox3sg+RaBlY+IufenekhqpnOgvkL4UYA1o+51bCfqoW8hG5fxasSsYj/djOVyHITyXNRkJS/JzfoCUfcs6hamswwmrOS/uJ20uXMhfbekrlOw25+O1CQKMxpZHlXEh/j6bo5ZgYtKNuVmNQ64EEakRMdqcbbcrRBNLrdcJyszUtlxGKGa9gS7a46C7bTftmIaVlGME1ee02KwfC0VOGUdfD6rEIinlDJ5Khc58s9HizfyDlHafEolYuotowEiTV8jbIVMKCnsqiDNclcQXGzVelo+mpEKErqHGH3whhHmg1bQ==';const _IH='c9fe5fcee91db9f48032d100834699865b907249be5e017efbe6f153d216ef12';let _src;

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
