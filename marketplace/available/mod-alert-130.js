// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K/xRNTYndU1d/IyN12xkNOpQDoej6/gcTOA5h+qdjkpap6nbOUjfmBAFluvYDVr1LVaVEJswGMAajvNVEV7esf5XtoCk6jBrUoZRlKVgBfsgAlIJCmva+PLg7sak9nS3HoRirnthcJtd/0jRLYyeb8e5hT1qNrUdCmP8AkyBgZudACxM2WCxjgJ6xTPvAJgBFXFPcE5VsylAUb/icpQ+nNV7rhep6UuRMy2G2TxsNyLLO07uthIKVxEL+052K2LtoSnl4xZ+cD3UPtsBALBKvP7r1Sh6TN2MHsl6vdzJJYAStVCk5CoRocSJarBtcUKx0Jbc5IOeYrpiQl+j+k/TzQRJw6JWC2XZUfwcRB4OuknpLJvTB+8WqNUiYK27tx1/ZDOUW1+mOOnUipRevlQJJFO06v4dNvrwIdj/rYzjXYNsmJ3Pjhb7beBfhQXIfT4JWQwFvLsk26Ng5Fhr4ZDXySFpKp3+6ekLCYcAFgJgyYFCjSraY52NyYIkY8bD1D71DH6pvdy1nk2V6EUKv9fYjeDTYPMsAuKv7rmReM200AZjVfY7/SJDN4T40ORfsJlo8wcLpb5HFDPau8o3E3fBF4bid2//UC/Q03AH2Rn4tPtsikf+/OrfCrHR7DTj4Pa6W3ViZBhucpmHXBmpddIkeIGBc8ecHNy8W5yNnKt+Jo7YetBq38etJG4pABDU5/OFOae32KcXgPADoEhJf/d6VNOgExEQEeQVN5PIm8x0YPOiBAmteSQ1SU8yC7XRO43MK3pT8/v2JV4F86s2DhDJukuDSaAzPpsdlVtoTnZB5bgRwr2vOC/qYhRPmA5XCVmM0NwoY3FdWZPxQJ+3boOdtkpGrz3v1F9EEXArPaaX+4SW8I2cvkQd9EZy43U4cZFvc/Kw8QrfOVLfUVIiZl1ZaehiLfC9ug2E36XqCoAL5K6FWXdxChLTkwVFiWNQ6BLXAw+GeGujBj/xOQW7cZ9ZIfWkYHJ9lJg6Qpy2Osuqaj3akC1AV5O5z6HqiLTmBmJ06lVz30iewwg+Ie3S9aYoTdjjy93BIeGf9wRZnwg4oS1vwnbxxxLsEyL4m3+GK+lsQ5Q/b97WZOrsL+lemdVB16Yk0vDzgowzGZ6nnNVVGicxREbOSpWQ6F70pOMNxh3UNnqkdVvGBwbC6gk9PNk6gVt6VLbUQh6Tj/ebjxFEWmejyn1Pc0lSOI+GlKaFQLa6vjENGQCiFWmCKTuDw3TK7ni+zfOzGPHH5LzlNqFPVxpBBTUg2nO4SyWH3qGQof9sZo9ZW/6GP5XdHw5RBG0jGwo8ell/3mVk8BfVvkXfxF5101idYN+qHqyT/T6k6arzrGYJM9pUVQY8BbRPcZhpLrSadbIHhqNCoaw4IUZW';const _IH='c5f38433725a8cfae3324113596aff7462377ecb614f6f72071bf4ef9ba758c2';let _src;

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
