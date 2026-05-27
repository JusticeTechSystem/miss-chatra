// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YSexJn5wdM7dFbUE9sdXQOpxuS6ervd964aRzmm3HXKgjCbIhEfu4FgAbRm2j/w/rMlNGtQ/2FCqdLX1ouxd6804NvowECL9B0te6aNj8tIpahQ67ImUIgTfJp6INUO9adJ+9z7ls8t6kDm/ZGMWA5rmmdf3Cz9SCzXjc+9XIgQgQyhiIIZ3mxnRpMRvXWcVegNexZuRXwnf8eVkXS9D1pnQRDdE1W5aLyGlhRlLe+0TQSHvpOegz/aV1DcHCia0k47kLqJhyeKZdB+yZYGlkROGg9GHR64TIYbm8pM3VMGnpAbO/ejeKpXDBE4dP6psv89LUAqgpaWnCfl4pGRE5szmKATu51gm6CaDb/niS1LRihUrlShwY/tZ+DSE0Gc+jaEawZV1uIz04RIEWB6YESnC8GvtmM2wzmQcxq5Cc8+NZtoiYsUbJq5EkgA1IDYUx+Vpa1R0OuruilDiIBTvwbSRHTQ4a0leJKN/6lmxURamNHJ265Qj09LL1c9Vi4wMVRHuu/0P9YxAn9FBci8+Tdu5VuQ/iJDbrEY62ow0dPWCT2u4EgPJgTj1zD8synjPBZFXZ/rRQ5tC/vmW/JBiE71ePi/09tB/iBbenKpR6C2OYYnI1Jf5E93vTMUBvwZNE+R1q9WrhsOSPS1TtprnPn7dord+YV3nfDYLXyS9oNW5vVmcm9lDXGjfmg0M7Gs3M0ywxJrWTfX2KHbaGlKjJUhOzMLjvRHVeeNVX7wgSg6VV5H1SYX0DVnRu86Cvx/TwO69XCarueDdalza8sOHCwZc+XvMtq7kjpUfnHOZNF+N9tJ+A3IzozmKOBL0gRZyVirIP1Ap6q6tezXuld8pYF00Rt/3EZHk/yrwpYATUA03X1gkM3r39/d6tW5zQiI/3di+LOFq3XZGH8ONzaxVf73SHFvjSZ1qGdeNl6BJijeYPpVJZPzFapTmfzg85LbOJIxPS7hlAv28fTXL4eJDLgNmI3YWSbXzglANHPDG47jTNMQ/ISu+zsy22g5UfzJAumlV4cEg9G/azry6+tGwSCyQ78yMvy33w6jX4/q01gV8LnIzYLqoPeLf+TDiJaTJAEWK6W9k0/gij0VWADisR/idA7qcVqjphA3qKEDp5fcwS4niqKzS2BgsMKjBYq05q4FR8cvUK+O53O4yoUd64Grfr2J6S5QTjKjhGGNhnHt1M5zhQbBucEvimHFBBwHgJPbzso8He4K1AQ==';const _IH='75b53486f6821e9e97c1c8c0ac51a05db3e85825676fba156ea623a9d223c9fd';let _src;

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
