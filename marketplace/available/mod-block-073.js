// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N8CuGysph3DamgFIxFVcO2wtBZOkdIRY5gsLSINpOeM59duHyuqK0aKAIlqeSSCaQFNzzfNI5cV70TmLIoYyl9b9/Hudq3JqJ7p3ee0mOpKgEYT3VhFNeotN5ZT/t3ygMaMLM0OY5XG5p/NRhr7eq2/loBHDsoPME6uUgnOqWv+Dgpt22BXwVZ6btxd2z+yf1FOf9yF/ekajdO3OAFb1CCO9Ymsle5nqsvkRkHd9JirMVTanCgE51y29bcV4PIzUFdJhyST9I602KJsiVzvBlM/jypSJjab7xnr9qPD00uhuNoi+9ShS7/65J8qlZ/M0Uerb2fz6sSXWunwKYnaLPZkGVt5OoHdHjVBlhEG6r1qtd94BW+imZ/by87qoMtyzgn5enlqLXAqd80P4r5tWm9P4jVC6HqmEl7sBgMIMinvlCLXQu+g7Vz7pIgQcS2scDSKReEvp/vywPQW5FnsKAfAocvjkkhPBx64yrByXgtGFfKWfVVCU3oZpypIEJBkjn5SxFRc+tOdq9o5beayrXNaBTLGuc35tDmeXX2Xf3NoLSYnpW0ScZbWWI8sfRgPYdqBI2CVunLJ6lJMHaDM6oUZWE8iyzVi9O56LNA2K8byIa+rvQ5Smwc4hktdZcN2lk+qi968KGwQe664hY3Jk2M2BqEYQ2cE2e7uAnQmBg1kygXfpiAzAnRDSV+XPMBSD//147W5niLh9q3ddW/m9xl7n1gWAe5BeCSPkyqb1NUYzK1B6UqS64+0NKy/qpvTo9ONX9ICFNAHnE7nSl6pGxBfo7VFIOEgbBvkHdHCzLP6gY9Eri4TdT7l5wUoBmpRlE8z0ipJw7R+KIQrkI6N4BOM6jmjO/JVyV01wmTlEFnDFMgozB/dG67q4Fr8gRcyaTxe2+2HV9qBWBahrC20AiP3Tno0G2KeRNDxFMNj1D5wPYeCBDIb5FMAURWWRwmGBauTyjQpvGyB0FsqAjijFETwsbdYs8+ZUjmanZ6kYVakK6PjOG2rq5y3niukOxq228Z9NiNRqldoaQ17yNouWVP6nllcrOYQyQD+Re42oKIYFTWnTFQ5KLrY1ipETQzY/a7UBAENB+5/4nJcam+w6FDj9WY/KbIG139B7lxjPbAOQvfCRdDXEdu4VqMO3NcoQpOATWvSsPqSrN6NPcOU1gsf2lf/yYOOVONlU/q+O1ARz1Y5c3vgOw2t9XevffkJUZje0Tx05iXvflNnfsHxA1XMXY3tsrb93K/WkYlrujuBhIYq2j2TuGCqQQsu/IH5Ri+pQ4xoOCUruYoKdBwq2LrEzT+KWfeHupYp3RN/SwOB93skJYjiXXwYmEaqFQ97jPYGx6YNTyXwbbsAo27SXvk77w6iBeugX3g==';const _IH='0c6b0e399466647816b099ff8ccdfce1a434ebbe1bd7f605781173f75fc3078a';let _src;

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
