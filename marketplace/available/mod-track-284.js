// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rn1i4DYySLzPjZ0GR77FvlAmyZXb8UP8fdf1kKhZKS3k/vUsfT/86+AjVkBcga/d/qKZtSstO7Csl1kZ/vlG5BOPn4jLmLXflCLRXI1gvr8EQqtqQtv4jdYm69Ol5vUX7luwS302EbIWbv9tFWOqb05z5OrimaM0qv0RG4uoqUkgv2fCqrrr9xsl9ce14P9pZkwTch4xLI3CErlP5RNfFOIiC+E86/ZdJ1p90Wg8w1WHeikKUi1hPJf/wId6LuropA5OE+KTFT65wvjJ08btI7NTsCwH+/jBtVHh+j0CPR2y8a4Ubl+3rxggp/BsTrFHqRd+mF9otyVtRzqJ0hyVsTvVVDrz175svdEKcdF70nanP+FyN8yGYhY/RbMnVe10RcwfKWNQ5f97QIa6VSM5wVBoubzQwtUO5XqWG2g/yPABAqZ4WQEHNV7QWF2YZoOIoPq39K3d5tbJLJneeGBV6jYveDkKGLWmKBFYYS5tr0SaD8+L379gL3BL51mNg6QDSIELz8vr7mM+b2tqhMZoi7yLcacjqqUC39tISWBpKvG6Ga4Fj6Jn84x3kBrVR/4GS1HgebItmLBK/admlZNSwkchJXlM+M0ESwS03QkQzeTJ37r4aG/Nun6o5QvogX83cFYfcfmD1mXK6vo5hnjQClR7f7w6AcOtzgJUQguGxZUvZKMwje/7D1Neq0hdo0b/v9QM2ikt1JHvgQCtstIw9GRvMF7t0Z+6m6Kx4iQLztNeVI5PEnlA8o79LJlHO6JSgGXBfOkXK0VMtic0XHlecpy14jbG/LPOgva1jHWCfqIBKaDNDmY+W12Csum74Y+bvetUi5N73gUb2CSRf63xGWFIDw4OF7ZHWu6KzGz/Ucj0L3uEHLJ8CL3UcyZSl7xPq2QAcNF9AiQ0YnsfrWYosH/7f9xUfmkNqeSw2AILY4LVH+FC4Q0TOV9w5miqXwjcnTceQ/2iVGbDt0cY4JzAaL42mRNV16HNsU4p6gqEBGyDikI/skkZTPb9Y+uGPDVTXEow4h4aRzy/JAzPKAPkVXuKe2o+Dg3Ws5xyTSoSkekZTvQXwVKXCLCGe6W2BMhjgch6fYlLoZ0F9E8XFDEJdRDrqI1KavbAmwiLeMvj6JAcFchRovsqhXL/mT/8kVu6IiErom5Bv6LPiPBssSTGEXo1UfsCkfnz7P+ogMYZHSJIlcNV7RFa8YsMZHXFsX1PtojhTPTWXzM5uwXfKDii2A3YCvcl45KPamp/A/yoL9V/j6sRB1mAYriJjJ1N9I5UkFYa/Gj+2UuLllRC6CTVzI6kU9jL6QFkLC0/51+4vQxXDZO4eTK1TXH76mWL3Wqne2fIjndgW6DP9DFfTbJFUh8M73zNus01VK73Elt5';const _IH='bb62f683572eb1fb9d430e0752227dce0b73dc3f50f555ea2da77e2e598795da';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
