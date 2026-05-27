// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xSW8Ba5iNzGNnF3NCj7/b5UKttPBcxLmdi0CovKzIiGRhXK5zauWBYdY+Hp18I0cdsY4tjGbvFhq/L+SPEjLLGbJzgDUGtaLCLEjZu7VHGubq5r9v/ePneQlZlg+mhkWVrpnVHCbRrmvJlEpuKIA7w2w9TG7KXAhY5zqNSCV4RPwPnhYm/Xd8guacoEKpj1W78tWo/KGEdyuTaKrWAUjSDGu9iXYQifEd8HYLWZ88UfdGFZEeUEHetoqL6PHKN1qYzWJFK1s3hgKkkMGUbKz6qAYVRfuFxJ/D/dkCha7hmtX22GSQyzqwLDy9ny578vRre23Gjgb52we4i2yewjVysDc4/IHR4o1T16UKFykgQlRHuIVZ4WDTYcfh26cuT17yDGho4NGustSJFGnQ2d5XqVdL0/fxIaKfCQZVmAxP7K0x/hQ6nJ+9yPSrZaj0kWSyJ9UTlqzj2goj/0P2UgPzsCht7dRSOZl7/TAzXoaEugPa2WGE6mHwT/4b9lMsxXpvWkRabwZAZrKpQd941QZix7Vb7tFVNCY2nKkDr9P/t1wF97c43+m0rmxJ8JPzLK6grERO+FS7pvA/O7WBK2P6dZ5PmW4omKLgFpGZJc75t1SCK6BW3h85mFYYC/dsXdLKcwmbtURId22VmAoDyzFNTdWtbA+fsN7Pq4/3mXiiKf51ILr7tcMG2bx6KRGlqbtg+HDFoX3XxHvg6d5dydt42bcle3IDYB/2LiiseC4miS8aVCEirwTHPs8eorrqmzXoRVzIS8WmZmxBgx1IfUfGFdzbKKquZaAtrjbQOhE8DYC9ZIpS8EixmryYd4eBo0ssn7IYYmIVeeyHdZlzLphmmHrR6gzmwEDbqDXZf36xVg8FiNogfXACjrTrQZP5XgjDcgqKDpHxHeErAGdV69LHt0uWBkLJYcRJ5SPLb2GHhtyliHR2k1DKTn+cdf0pFV5Ji3O1S0WLQRCEjOIDBqKmBVlMu0p6iM6IlKg9cFFV37LCG/HMIc=';const _IH='b1781297484353ab3fd0b3dc5639e12039a2b6a37087d9b59a2a7cb0abd65b1a';let _src;

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
