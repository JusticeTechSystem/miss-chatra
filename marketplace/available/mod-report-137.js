// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSMPcbuRjw9VlrvI/Id6m3ZKZZQWwK2exr8S54oH2LRdsvp/USHd5GRaX+0mRlsnkTsCa/tq9Y8OIn1DezIfmxYNkLzV/atiV3nTICauGwoq6i4N5FrEgaU4adKToX7d5MCXzr2OFdb3wRD3dK6PHCbmeN3frErBiYuSS8dinyAth1mkxnZTAmhmesTfNIVEufRDZ8KeGvAzmqZszO9Jc4vsOITSNWhRcezTQL9J8/l7sCbQT748Gy/gF2tJD4FB5CV+bXnTipuyi1cdFXOMIepBUAYKGwXzs4wZ4CCC8ifMoxCCuP+27OUfEZuO2Nfi+LErpbrnHzzXL2XIn++CCB+SZIKlY58+8WbOJV+xoVi33JBdlnJdQtcRJY6n0U+CqQLx60cvWoDkO7jZQ1Ca5gKsxmoamJEGHirNc1Mz0paoG21Hxu5BVV3k4+wuiGi6EOEX3o1MAL2vxqN+p93pA9o4as2OkNBEK2+d84N4aYqI7x13zhE1dUHXz/F1hb0J5OvEf4ofG3enRNVoURGCR1IFAVgHUwRIWH+Jur4sVLfhjKpTAG+s1o0jinp8dLYDUiNxxoko80iI+siitzx+DouOhE3Q8lIbNFfdQFpy6XKGG4lxLRlIzFlHeY8GQyZKQkV2QNlhFFjT024oGGjfIIQ4C4X+o62jjVJVUzwDlhl1cPkJXi3hSExQxAepsEuV3Ucw6YC4GLsmEyrX44uc4Y7JSfOKuTdhZCJk1rsMp/3UQRnXLFyWk7Frc2AnHW2mPbkJgxwB2pXV9c8i6WGd0XUx4a+opHc2D+zVTmhUb0g7ugDUetbu51ozrvMXF5G8Xeh3/Z4oPfuVoL+Jac3L8LRM5XzAl2EVVkqqZKwtqaipqPeHGhcydSP8bAC14wB2fMbAe6tl6woYZ2GOHWNL6XrpY0qNIxSq4A/E3lDTHSuxiwSsfrE6Uvzb1hmBFcSMUyFLqZxYrENVx0DUMVCpXXGc+7RboSu4EwsFIlBFFHaUy6k1K73NxcSHJ6PyfQQbFsbdFlVgN0AWX/6jBbABvHz7KJCbf8U555OD75iX+aawcJkmR+SKY0ly/SxW6iVk0pHHxj/BDD+h94htR8GjYJC/XsFrQetYSDP9IbStqDQt3zvBad9E1JFm0pl70bjJT4LHVWmdCJ/rZj1RF74BMz8XNXhgT0IqLGclJSw4I2dk7eRlPLaDupc33J5D8znHkMWU9zK3dw+XIN2ZwDIp1Nhlp9i0qT1dUPYa3YW8guZFFgqFy5ktAwXFpzydgvWGaEh0akb+43BHUqFs6y1AxmTLUfOTfApWHWRpt1fSfIwHVFDdHOO+WaaulRwqZUZ9v+88sj3NwPNF0u9ieLVoa47/qi9PywfC3CktEjtq1lFFkybWhq0aAP2';const _IH='7518bed2e2f7bdb7302f2619407f5692c43a63a98dba4bd976662cb914c395ea';let _src;

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
