// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1IxGa4UAL70iNCq37Y3PX6C6VQm2AZRoyPu56FBT0jYuDo9cTqrgjA7xfeIin1xW2FlGKZF6qckgetu4hQ7w8vLCFDVNYLA68AvlNqIyL1vxFAFQpbSGl5dhkqae0LejRYNnZz7eJ3mkfk8s3ApDIekeLJ+Qz4GPRbE8aFlYH9BZ+RBqoTc868+kMH/DIUOXz+O1t76BiI2IM2SWjnPDm4PmZzRzE1kRCmT97UP+fBKll8njalRTGOp0Y81StMv3puXRS+7K/YDt+2FoGfXeCpO60oR2kPViesMwoo71K/Por95x2hjtQNALE1rBbsF+ctqeRiXfwBMqIbx+xOFW+i0vrbO7kH3ic9jpS8cseQRpE0LTO+n31oN2bzQOjH2kr1sQXogiMQtaB3dy0zvkahSz9ZQZbRaNQTUYXhDiHjAe7Q/CMdGlFsTTAnWUhG4YmOR9r8w/oveRMi2jbrZ3dDZ05KYeG24NQtVVBOEntLo1RfX9+8prUrUO58Ece4+l4OIGnA6H6dSwd6CjTPvf2EOCaoBUBnCyPzff6m4VAAFCVSV/1HHP6d55vuGcJo0P7LQT+SFFO94VwgayYisOjL7zIC+HJgbsVQRH5uF8/QOhC6ScxFrYjlyT4pV4G5NzsHxQDTQHxz+tAdrUQ6kVoqxugO1zqFYXvOjAnZ8rg39EdCY2JGTsvxfKqpZ9QXzbX9AYJLiPOi//WRvbg5UXOwSbdlwkgsfTnj9FVHRHBsQwjg7p/SCxpz+esKbhy/r2SyoF4w8pkOOoTCzOPczoRY2fEHEDepwqXpnMTBovsLi3DZwyoHV1oyYTGXQE5VrDXmYrLm8j/UY/+3w7/wXW9DlLt5bljqB0LYrcO8UXp+H+ZWdh5LNM5uvH2/5RFZGJcAu5UHk+wVUflS1wLWaiImjqnWOOigc7WXLaBsLoDWqW8FgdGFM1lSuPqaduIz1KjLZ2BOES9ejbij6Gsvxuh/p09Rn/o9gbuaPVpfdehv6TMmA/Q/XBhyuOw==';const _IH='7ade250e55b1aa455d9f73c557ad36d098537d356b932b836eba07cb408029c2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
