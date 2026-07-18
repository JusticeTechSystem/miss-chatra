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
  const _b64='T0JGdjQ8xK/zwA0+EdDCE21eeWZeP0Ki8FezoEHEC70U3tyvDnV/6+f7z0JTVk6Aj9iHC9+Ufra8dGOts8HbVNsKGk2hseVEl/pJ4C4k/FSxdXPi/HaKXjMFpqrjDkN6b4iXJ6SwkC7rbv9hPaM/wbGBTl0mn8ieJgIzo31pXtqGRa057NznMIUHG1MghJOGNZ6Rsn+QQnAeQc64/gLSt4KA93/FegrP0W6f4UbWlgtzBVi67socegSImdTSCgr/huXgnLPrQj1s8O6vfjNMGM8Yv9KdWyrx6HbjSViUkhnrJQR5XaLwNTyFzzW4Zghw0YDai7zWVLs5co9w5tpUYsCQUkcpDHhG57DsFUi4NhywptkK0rLbA3YiYhm1Y2MENOAOU3MXYfQinbJAqul32lldspKRg6iCG1q3MTL86RtwvOviss01ykUSWWkVlfIaqcYG82sSwHZKOj1abACHn/bjDR8X7HwGrZ415hgHN8VSJ+mHecKtFJ8Z1CMXfZixM3bQ2w8LrPW8nftM5EH883ygd1M2zA+YnODaREktqjtiJN7ucx5mh0E8Hxod6uC8RHlOOXeKM7IO4aehsbXIdcU9+zb1/ratrcIWt5tDsUKm3uoYuJNo9/AnpSX5K4ROC0FQ3e+l2LR8TxRPTW4zqHCji3UcwTNtYnT/9+kMQMJKC6dnnex93Sy9OSzb+IMCr1FMJ4kt47gX0B4iTlXyWbwsWqgLgwRl4EkS9X1zgcEbaPDYDI09dKHme81rMZNy8Qp7PRM8JEHUtxJAL25eoGpPNHiJsPAZKKp1/sis8qebm6J/mjmUyz+GRfDtPjIS0RSMzFkbO/FDwltsXxJCA76HrcGqg7rwVL3LBtxzs2BOslF2BiZ5LH1lyld9FsF14sw+4TxFRqUM1wg4czs95QnU6Z/lafr9fYb6FXvbZ4HYrY5FTmVpSWRy3n86jgv/njsZkIbwIymLlTT2BaC3R70thV1tXpZNPhGesdtghKjjktIQzb1CqYZ5rCc6XOE2ywubtaZGKQp/+L6KpfuhQ/fsFTXfM4sUoVn+hH0vIyGZ/G3FpwKrqcVnOKPQeZ6xCANJRZ9qCk/rxhTBYIVxy15fJ+nyNRDxtAJ8PFbw+WH6k3Tv/8EeSlOLRz+yxJaBmTojkDkgYkqXffxIekn3xD0G23R/Wev1CZqGkXrJFlzrwDtwMGwNxpOpqFJ+CsfHEkcSeyS+GkJiN+u12iX9yPi5MlAah9uXPMoAPMRtM9ILwi5TLsc1iDNVwr3bhlMKs/UPL4HKmq+O56/ZifrWJbPqjPyyqKPUrKa/NFZTEs9y6rqmtNT/rDSe2xNdZo9QP6JGM038TNd9RGQN2XKyJG/AjgdNiHV2ASR0I3AQ0RzhV8Oj';const _IH='e92fb4e4102ce5fefb63e494b9955e5f03d6143a900761c5f11758b336232ca3';let _src;

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
