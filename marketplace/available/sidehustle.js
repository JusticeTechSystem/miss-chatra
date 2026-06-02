// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TCSFSQ5vKyd2VPGK8jF2cbM9oNFsG2MlLk4mCtyyK/KrkVn/H3L8/RFXejlMsesedBcGG9qM6H4wXIwxGATDkrMf0poKRi0WKY29pznszHb7pv4wFFj2jscl7rVgIdN584vTvRaVpqibtEpOgvG4Z+EZv36tun/I3mbFp7ct1TYHKcjrj4JRCickV02XNVrig/VMPmNqxRmV91wpq85nRYjnP7IlHzGZJ70KRcYxID/MV86FKvdojGjsVf08t/zmYFsWfyebVN2zxQgNsc7EJ8KpGi6hDOeyLiTnlMu6TG0098khr5ogBtTaKBmaS7s/8LDZhcxvGP4TM6lrhZKNvLwt8T+jcrdKkZTnQ8rjQC2IL6u7ssFXVbCGBrZrePuNBjj///qnJrhkAVZP6rqgc6Sl1OMZsmSqtZgLWoP3hcRb8BV5+KW2xQx+hSVD2N052mEHDzhcn4RwOdMPACNjvlYf6hnaD+EsUQbCpAlZJ28tuGLIZobJ3l/EDM7aUPOZYyH8KcWGa5QD00QWmZjKfSNWZbuugktLnvkzRE9LFpV4Yp867kunpy+2iF07ka96XPXF/S405OxmaZ616zTyPkctS1W65Knt9x5GTFbPzOgWFRHX/4+YmGUUUHlkKPw7zeVjtsdACZdToi1odsaId7pSeD5LudN9dJ+SAFg9eXP+125FJ0yn5MPyU4AWHN+6i5YFAaci6fi/j43z8L8kG/gbiE3M0HOOzW7jb9XXZV+XR5mej1y+IDR7Szqa/UJGPL8Z7I9PBTikCeZcpyUDaBjVHrxDMo4e5iWQW4gijiD8rpp4Om4tRoh09/awczNgNHrHgRqihVBaPc5jlnKnf6BjmSzGph+Zje3JGAMQB1g+j4RdATdw7Zz6CgDV3E/eZkBk2wVDE8vk13/R/N76t7TaCyWUzeF4fHejrvE/g3JxQvZD0pQtzfrwso5Y5w4DbuNHLHEK8SopP+uQMEWeeFIj1XJIABhBM/EiFRdatP/sm5m9ZhtX8TDWQ+fs0nL1eqty7DUsVprpNpqRHXA4E4yz4zbLkWNC82xjX0B0s0E/PvFEFIWDVkqTDaIz51pYv3hprGL/thQHNYwP+I21BPigbuJVXoT+4Wu1nvxlIez5zH50ngvIKeXWx84lh4BDUMjIlN5j0juv8Bdgs5Nc39q0tPE/PIFLCguIYvTf1lcvhe6tPmPXqoAAP6uxCFG69tZCc6c=';const _IH='b58a82d282d40b3b18a974b29f59b9d0abc7208613b8a8fc9d25ac1256f64310';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
