// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTiOLCOc++WSup77bjlS+DOKc0MXxV+iD7Gi9Sq/GEKpHPLDj9SeNe5A37ITF/HXX4ueq1jQY7vG1OZMP+mT61r54WEtxBbOEPoZ3vudyQ4h4A03ZM96BqDZz5+Xgc85ECzppG2mwtV7OMTpwbaOcISEpGtKjstTOXpW8uyB6OAQ3c6wqYYV8ZHC0ovc81Ip8ycOq0YjyfwrCFwlarSVSWJj7SfiwBNGa0rQYS9Ud9Gj3XDxnMeKZvSvsY7F/vNRcxwz/0FO2QxG5fo/JFzEekraQ2YHCBemFi1mJM+lpaKI7tNQMD/2eYe/wSl5H0QbSG+QyfCru4YoJ95FVJI7nF3Kh9AHhlJeiq8CIjyfpUuBNciH4Ia8VshQjulPM/NvwUVk9vPuSV2BM6mk+uwDZKlDK6jJ7hg2aUE0933ZW3/62jeBnHmHC8as99l5b8WSPZCxlytoOChS79jgTu/YenXPNSf3TBESzl5wkVyZc7O7tFKkBnUvKLPLE+36UOIin9Z9PrOmFq4HZYjF+VBzgksqX/pzsYGOtPGXyFismzByqr5WVP1AV4zEqQe0Guyk2sm298YqiRllGiEvRFeqVy1Im1cJ+tSwaeR1xztOtdtq+VrcIMTeyaxW2hcQNoGYPLg14yx9shZIuuE4NIevLyvWNpFlOR6H/hCPg19CI7VLuqS73ZdwR7JSsmaVlUTGNxU6I92//jSowzDP6SUmpKMbqx8rc3Ytwh9fGv88et4O92W0wh6g389qp2IseI+SnJaUjXFaH0jnJGKlgpNezZ8OuIBH954zKwn4M8TyJQTp1sPfPRWhdxjAhNlfuV3Ch1cPHNKN2NSt0QEbkBLwAMO7K9YcLIUSmKqlKuh3NlVGQfXRjHOJa4pmfRuZarISypqvWROA7fHcl3EW+EJLoJ1IQFbECyq2G9gKKzpIKDMQFclgUualPa1tARldVu7kX32t6g8Pou4z0CFVvzo3zbfNrJPTr1BtKzSOQnNDCJkGKQM8YamgRAV3ZQx0sRFgvLbkgL9';const _IH='1d64751a4c2be76749f07f6866eeb22e97a0a7284f1470319b1b2117e3b91ed6';let _src;

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
