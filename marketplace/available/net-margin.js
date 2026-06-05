// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5oBt8wk4jeuvkyD5o7jv3ypYYq12WEoJ5OMo4bWpACN1dCezqXjOK0bCeMb4GTGiI0RkqJwaqD8cWpSLn5AE6W50wk+oevxe9IaAxAX0noj74ZniZYmdfRqwXzv1yZmIGEpvnWIKXyTgvYxAjpaHAoycQlxVSCIaO+nRcVpFl82tvFgHr5+UNeOV4j0w5IxnXV5UD264ueOWERTYezqY7dpWtpRbRvDhR7V5bwKfJKrIJ0kVr04Tpp6C9ofG1Mt8EkWb9NRwU6MRhd6DzvU+IdBqEBKyjAiJQ+7FcPNL/9eK8YkQOMIjhP+gOKL/cmIGHGw3iqp1o2VGdBFT5HnY3ye39IGO/vXvFsS6E4pFO/JVkSu3JuCERZgUkWNjDS6Z32de970eaAEjf3mEJZNhVUrMpHssXoOqaNyCVuS1wsSvsvzrbZ3VVCT2Sxlb8Ypv7n7SG0YGFBdF0DFrwk3IGiKTOYkWHxFrpsjqMtm+jJeBZ8tv/xfpY9gqb70dMHT9LbEFJ8XWKaUYVt4MfPSfy//sBNX68oj5kyDY/onCXxCAZzePBMRU+dYUm3s4bZS0CgyT5ZAWuK8yn2zpo351mreEKNsow78jyGxQGEi9Sa/X//zqlmMg7AX/2uHwGxZIJm4D1KeVrsSdXFyFLyqLhUEBfgPCJqYt70pGSRK7si3H1n2vTSaz0/K4SXWqYYpoRnYG1R+DQf7VhQt67QYzde++EwaTv2TEXl7DVZtluTeZFBUFeT6qrfqohvFRmd5n0r3L42dQpJKjwXLwZlIylkWRPfacMYbf2bN8MRRYXO7HETEiFdbYMqppPhrVUKxtSEp2eL5ZmXY4d98+UeZj8FeEDrriT+shP6ljjABttabe7prfwuxveD1owucKiRKt1qmsV4R9vW1RR8vBOH58w402cC3XV6SYk+SeHTCuTAFFMt45/MJ7UpGfO1jc3CAp4sd3Vi/UKSNKtG7nxBbuaT/IYpVByNWob4EKSszvjQlyMkGrdGypdUMWKguUCR96m97r/H/vfjT86YcvR1LSR6vmMLchh5zYOie227aibeZ2jXIkG1L9gyg4S3pva4GJi7i2a+wYzeGpiSLPic9z2CDHEtjmfN8f5+ULA8ZDnyuC8bLspaumUdddn3dhsh9aSdTC9fY2hFkVEUftPhmF5e5ZUIH3O19Va9vnDGJpe5Rhem6Vx54EaeL8un3kuMhuA38EaW7IxEY7/wWHKMvqd/P/SuwH1IEXuSEdDg==';const _IH='75d06943387dfc04177744c0147c9c84cb02051737d9d0573ee3da46f9f93d1b';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
