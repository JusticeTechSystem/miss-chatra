// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6I1de3vZXv8SH70adcvxUI/UnHQOUk29AxCYr0OF0v3Q/6+MCB4HCozegQezT+aoOtWM/aJJkkSSiNbnocwECwrk0rdFR5W2ZNth931L+ZbtwK2f4KuR0zL5APzxLahJdfKBjQrns6fikPC63xrpPQkKG34TGVKon0wOycn/XyHCevXlYiNGQ5E5I7fEMt5mE5JOoI0cSQvDBHrZkp6KaOBPYsxCVeSnKNDE7Qs3gx7R6aJ9hNQYngwvij3+vxt+W46d63Q8MI7os3S608mrWD5k0dXe+evcFjn6mQTTGPwW/I0MdtfAB99IUmxDGJJTu3zYpQe60J0MIaF2sJ573HJ3snySVqxF2dExmKQKJbzvf08n8HRuPdglYcpmFnNBRMhYQX2YG1EgD9PKxo0WSDhfJyAFVQgs2HmPCkLdvIdqz7Rq0Zt2swWFGs18O9KaCJkfHRXJN9ciuRoKgw9ejWPJJjB/G6VKxeqJHsioQyIohQziel/PQFj9gM6B4Ylg47+cCqb/ghynEQmLQIbXBrKv8fnwiGnN8bocz3XA8XMeKRXeZn8toRYRThNhKshnOtUuC9k1IM0N7h+NLh1YyimIu/pDz2CDR4mXBvQpVcyt/Qo9QYTM2ke1eYLyoV3OpXiQij5vPfAFEV8sOnuHKOOWOPFZTV3q157iyZD0D/0pmU2T96rbTnI4cJZ6+BrSK3l3dlDDBynw9GaFfiV/zQGOe8n+UhHYr+d9dJ4z6PlCT1BMRbBSb7aPSqqPJO9cLgNAgrWHbqmBNil/Q5ftqXOsATe1Lf5rPOr8R37NFIxmyRUBp0MOXAdYsXMCrF/M8+GwnFFRRHtb8KI6OtDa9GEQhGMQWqk01uokRuF7TSR/sPi0s3eCFoKOTALOPQ7DgXYoP0j5h1L8pgdQuoA4Qm4zlsKy0VTMUElFB0ufbtGUdZ6JbppoVUafnBRcab0VVLQYL2BtJwJdLebonHAUpy3rQfvSskoYA60Bm7cczZwkWzdjCJyFkQrO6A8ARd5uqVDdvudIJHNTTuPCfdTY8nIcRdQrMxv1o2Z5M6kfuwj5Vjb8VggVuy/GKcE+zKyE4NJWfemCbNfj+jOc5L76uhBOa7mBwIfMVnJbuwXMbqRNDuWcDZ46aFtH2YWz5Ixnyc8PgevUmOGZ1p78SXGqswXzfvU65gDViCxvt9kahVgjBkBOUCzotNFdX9chJCjDgLkfcv0aXi15KVOPi5KadAzjJjxwkgvddUZNjVj2Wo1SCcdfmk72QTpz6pu2uMlKaK+YNojMbTAYl5+UJ5Eyuz2l3eW8saZxnpbxVN8X9ZcTuCEnI+NUP0O6lv3lI5LP92lgZr+8GN+zMg==';const _IH='a42e5e9df0279ab6e46074113771bfb503421a75716ed38edd03f4ebb979bbb4';let _src;

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
