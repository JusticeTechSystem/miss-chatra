// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SVOl1oEsbaFL4PEvQeQA6TxmMwR1tELcmiBcIk2WRkFLy5eT9oQumyG/QZ83AkgoyEBsA5hRIFmlnl7JEnrDd/CQWFhgwDk0oXg/3aNxQE5SMsiehabJ3dNgTTM7ZHRZ/aWgvZGvCWmJMDYXA8p3eijv0mVc5V3DoyXiLbGX85eN1Ct418N0NFmC9TJsIanKahAeaiUbPPbPV55QCACKHfbmfhrRq6+jrltksO4VVmRtZTEBizHJW9HREMjq/5NY9XIAB5uURnajhjLHx4tbMD8iAYZqZYShftrXTFxYYjxTc1/0wujQ07jabwKpNgJulEWARIEv1krYnNqHX006O6gzmBzUhAys0F7E6qM1AYI0pkZLTAnl9FSt6ZkKawEbxUefHC4oo3ap68pZFkynPXO3eR2OA1p/HoLh90f+uYoJcwr4vkn2P7ZnP7JN649h3RNBAbkD2jTnzZeb7Vd5jcRdnRvJcvN10HjzvLzuXDz2+mebrW9Fwsm4x6aHDWIVouJNKkGRpfK0HPW9/4NULnAqtjzMaNQsfrWyRxw22oXOnKHi+EBggwkkZBOwTnSoK9ZESP7lHZET0dDSyGVtE+sfMzSBORLw+7HYc4u7yaEUbktITzy3W5lq54UvKcVKZ/wEuvsj57q2qI5itKB2v5zFWyRf5gAnr6JXE1EnKRNCuFOsSodEORE5+cAMiG77GeLbmMqs4pfx10TXdph4KgEZNv3SfLPZSjdokOZH9ZX7JOjxGVGy5niI7iBb9Y5CSj4lWbfNxKblTDGlZuuakxLYENWaBH8F1tlGPSO1FcJXbTxg0CGayGhi7gLvyznMcu2RyN3Zr0oLm5p8CG04Sv0vrYNHqhijzyG3nngA5/ZWGbfolnUtXbWam4ADigzYPOhapB0wX389FBFrGE/HrE1X51MVOyve92HLlkUa/tq85YE7D55Vv6YJI81QddPLkc4t3fH1MH8RZSYSSeHULkJykZMfSb0635pHq0ZtJzqydkTJGBTwmkapfVjC';const _IH='983880e3cb9c6b81f0ca31c80c62431fba85bfd50fa5fc85a7a68d62190c4552';let _src;

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
