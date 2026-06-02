// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xf92+qknZy5KihbuVCbcEJe5XVZ3rS2QTFHnUh/00Sf/MaQ6bsiUSfB32Ul0J6I2DzvPGdBMPuldgXlLmrX+UTtO3Ir0+oL0YcQMG/5JjZ7HBfQkAoD1WW+tMnJQLdlXBSKPzwObfNGJ0JLUfGHFIcMPN6odRn/NCMIbcf23/93Kr3Ujfc1PUL79/6Fq7Os1fMXpMq3A+D2EyNHj1J2nmdnh9svqInI3vQWzpurfFdkj3aN4At5ZsSx060WcFU/3YdbjqQzmiNucPa3ON6Y5gg0DC4O4L5M0zOpRO4R8MgQfByuqDeMhKwKdt3BdZJC4ID77s7Sui5Dwh4D3ia4wXlYM3h5vXXpjYCui5/9KX0hZ8WuvdiMkOzT5dJJ/mOJE0LJ9On+pTHCHwoNnrX0HFLDP9WafiaMgxYilNIQL//TRsFJSk0J/zcNFbTCZcLFrOoPQhR57POINzT/npntbPBeTz/YNweJGk6hutSmyonotTBW9YrWrZOixJCDbyzrfsRLxBxPu9w/a/+hL4Nzf3+/bsLyRmv8EESYWIWVI+jSM8SZe0s3C0/yEvaJR6JSSmKBnIfzSoZ4oqOCpzK9ClyCPyi62XuA8QwroBjSCjdQUyEEIAVL5JD2A6foI+GECxuf426GMVgW2lODJGNZ1KY2iviUOhuFag3pG//E+t/6wt8xF82MqOrCfUj+4nWPSOoCYM4+mqYVmirQDUJRwN28MQr1PeNjQetkAwTwfISUIxzntHkaOMG25eq55a6eGcdA/ojPzoK5yXO+o3TlhtYDgk1Rfv5OH/CYVLcWNu3+6SW/eKYFW1SJZBhD7zA37We9zLTgVJ0dbG5D0Fdf/v8P62bACF4e3RW/K7csPtc8Kkl1z2ugkdeM6CJSeytZdUARIz7B6BzcKBZoUyUp0ySFWeOdogbYaWi9O2YGpXUtJXF2CjdxhXjm2ocZRfvRyIu+iHKL3iVS+Z8VLRr/6AYGtjh2r+qdeOIViZp3ZrODtpeSQe95GszO76LPFGmsdRNecUIbuMy2+T7QnH0d/eHBbgCv5SC+dnZFhpkwf9+QowQgVdwsLB7kdjcU/wtftvyspaLSlwvo2O9Hci7+sJFdP00rVd7dlee2HZEhTAh5HWAGAyDhk+63RPopUQFZF0frahaKiOXqVxRwUOY65DIteADlwL/e/HuQT1bp+EF3gUigb6R2gl4H+8dSupKu3e25pClJy';const _IH='ba930c2ec2d09b1e8c0b7a40e2bb1e4db19851efcb5a97dc31b7e05926466173';let _src;

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
