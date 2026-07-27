// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRYKhfhIUHKO57E2ipMSa4Q9/X/XkWRodq+Bj8l43Zkk9qa/aaXUJ4F/3XC4cTPBuJP/DCAtNs0uRfIkoZGbcyZsr01z3Zkf84i8XR2/0bpCKs6bKWjBpKclL1CyyuLwfeAxYL68iql6pplfzJw0rxZWRzlnw/yO8IwQecR8fYq6IAqs7rgNrtZBQNPtB0Tuvj6doioseI+bE/INuHn+1iyn4qM+LhB5IgwV/AK/7BNB0y/L2z9S7DzL2a70wIWtoT91wis5DsJ/MXPBQukJqyX2VCcJTcjPLtVJNzenByUhwCdINh0BzKx/jdp4VaA4H8VRytDNbjgevXPARvj1fnEVuT63juSuC1k8LRDlkBin/fsvGO8QyBwG5FBxy/hTr5dGB1kqkvlrlK9ar4W9mluWggBZl8C8LI6MUZISK65Kbqsgfcky434nZbjVBs7BpNC8f8448Dao9vRmP83HxdF4dx5Gcipz5vWhtIip2zxIaAeI+ePI7ENkGIe8lyKrGxDVTtTAWrurigl07LPfHO+0nmbkOekqU+E8Yw+dISkR1lmB8BdTENzIyQU7LFqgdcC9GiB8cquMqpnzd4+RnZUlEnc/YIPKMAd05WXxBbaqoPVDXI/3nVVXhknuM1eoEMod+xSkY1pk32MzajQ6cLgH0eY5vJ87dMIjvtN7pecV6sLhg1jeD++BMgO+HGQ4WvQDszJtP+0ruJWnu3I/bkxKyJosseaOPd6x7WLKWPSJ5UyhXoKBqt0kx9jOSs0KqN9MWs2eI29CYl0Z0giysB9ZkBdCKDCjklvu3F4CP+MOj7QqvsFDPyKMSp0TCPdi8fs4IbIWyOXkMzin+jOXI5qr3EKhVePQHn2+iO2st9/2U3lZmbgFL7QnqgB+lRgngF4Bx+g2pUgoNWMDqv+eUsWDRRfiVDMoCqA1EZvlGrq/1OBVygk6bFHt7hcnDn9TmLBoD5s9QHTZgQ8z+73vMCdNuHCfOOwrlwUw8ILKJfeeVKIZv+LZc6bdJFzH+TFeUIDi/NyzGBTbVRChkbKRxlVYJ5agni+4m9apLGmLSw/SLdjlr5ZiDPHI6c0pvHjvytIZO4E+6UJY9eIJaeq6kKwlL9v8oXeJoca5dbSB3IQGQ1PiwvTID+itMwYkAjPEiuZAfb0/QD46aDF/MGo3lQGpqdCZwd/9FGIRVO8DgQT2orLAsn+Fp6wRw0k5jNkKwEPACDzd57XiLGFqXyie0aaJh//4BL3J0hYOIH+VG41XOehtiQOUm1iNkcPPpe4YeUorBVLwvR5coHupj8nNR2qXUZxKdEF810ajebDpxkojQUiiE4UKqC46ayCbfceRPnu7iHU8h/dohS2+e2Hq/wZzCjGxchPsBM5RfDRUw6zdwli7qcyala9';const _IH='1a31d507ea60ac4e5518f100c01d3864a000aecb4ee4544c1f890da5c5cff884';let _src;

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
