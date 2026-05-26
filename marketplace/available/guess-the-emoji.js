// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cY2VEIMWVcT9R19L9i2QOrHPu93vnt7myjChkqoBngVZtGm9mjlqZsOqYRYGhxCXZqaaWDUmH7CtLCoXo93w2v8kfxDp+Hg2lsw/2Is7kTu0a49qqBRagBUvid4foqyEZqXH4SbzzJAbwB0ssYn57bZ8P6l5KhmHERvGeqgxD/jrlMRZhR/458NNknSTNWqOb25sWvt7/bzk785ROKAT98NVzXWsdMY0WWths7e8tt9Lvxzbzcajm6tknX4rOdeqRP0iHUlyU1ZuaPBiZsFouwnrRuoRC91lABxBY/ZigxveWgMKhW+TD/xLM9DcJ1X11fhYLzXqC7smF/UKUKxT2PQ96p1VdQSlDithIRFQvPPqvkTUMwSrhpEwxSMtQUSQtMNBAu8ctUD2QQZS0jpY2pfyW1vdeqmCeg4AmE1i0AHBUfTsC6u36QG8/SrYdTeEdhAsC/30h6EpCBVGd4NvKVauS3E4Q56mOIJ9MYSozkWCOsAJbQTA9+zg+8bT1aXXXms/HiZEmBujWHRm8Mdwl+jLUVIf84Yjd86vwOkgxT5i2n1NveUNEtmfYjIvMb/YL/0otPsjJAqewpTkOSL18uAMsNXXyRm/XeVPzJ2cBuXJAblZAlfzU+sa8FlzibJ6rIGuKOQMq+Tn36NnWQPfqQAGWEIlWSUl4V71QvYWv/hftAhqPK6REEyre+xxGDcz4onF2mBai0AYOCe3R5qkU1AypW5Q81bh0hV3Y/bJmw2TL2TG+2yLOCC7w9xhjoQrOHfX1tath/ueoI3dxfdFE0Z1Uei1ldP3tWpnbTrjkhvHwF+pi/fOhiYcsOkMmkqLFw0GxJdSk6Ggqbh9qF3l+S18PQUisTuGkDLvDj4dKbjMdwYnaPnA0UQ0WUgHUj8uGywwsD7C81jADXJScHmhm9XF/6yOf7nngJWzlDt611ocspCWZi2k0EA6ZR6A9CZ5ihzvb4FkvZJT8RATPJFgR1xL7KXpQKiRmrav0G32W7zZz74UmOOAhKNpFBEpG3nnyN40JNP9TJJiDUM2EoGw/M3UPQuAABUVnVk3avTtx7jMApw1Q5eXKo/FdJ23w0vXHTrsePrpXOrzOcwIknl2kZKc8NCknxZ23YGM6gh4mmdNVpZuzZhJ04qvszWg9YjRqsZ/q4UnSolIIKJWIdBlecnQetjLWqvtatID4Vaq1eUO+jqYoOCJbQCqFdoNfswOAGHwi+DnEyqSUxvyLbSEUcpzXIBBEGyLuyU0ixOE2dB/n28Mw0jhKA/KBnjNWVIn0i/A/j7p32c3Di76kF5J8EPPm6MppDy4w7dT6D11XLfTcYia0MgBJq9q3YZYjHJbjuYyIF+xJu6E62yvLaUiP5ZT/ds+CMarVixXUuRDpNeZxPrMMPYJyQ/P4kxo4vWr9J+w9DQFjWUDfldqcdIeNqybyIStE7KHvfFnyi9sgULXKlqbuSoY0Zq2rSaWIQm6mDC7xKJyWLXMtyG41zp7dPm5O/Ufkh6E1HqgXzhuuOhPfUvTTv6/C4jRKnKUL+Yt/Kgn9ew6q5e1aW7NcQaJ038oedxAyrq91BKfEr7+0UK/9EKwsJMGFWfFMwcspJRKKRh/YFnp';const _IH='e1d1572a6f384712fa2a42992914f75a2a218c57d54f07e1ac132500c4c01ddf';let _src;

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
