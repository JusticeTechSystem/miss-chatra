// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UXasM5xtwyj8Qs9LFbLv91S8mH8ZmCjNI9XCOu4VOMHNBgqQC+9t3i6ym/WJTweMYtDXDAsEbND24CJ30a5uzXircfaD/e9n9ncn4WaM3alJHJ0LnHhqPjap6Ao3emGIgn+XhwwXMdPCrgxKU1x6Oh6Usegdj8NU72xwj3AT0kUYUwbxmtko+u1ch3frURNE8s0k9GZevZFCrA9hGgkx3kPXtJPkhUJuypcmmmgY5dm7zBqD75yO0t55bh51xujhePL90wXhK6HM9Mgv7vE8sRbViisfpPRpNeQSrKBBTM70Hvyxt+23VhoBiMVCcvKtD/9CpWVAAvL41YXdH109Cil4WhBaUgeuEd48z8mTpXHJWaRDS6Z2mix6wyOiIOu8vH31sTGa1SOLEtJy56uYeJn1iJ2IiCc5pheSwGnAfiKRmQITQ0zHen+GeeLhIvzYi6miBHfD2nxQiH3PCPPNRk+slnICa9AxSbMc8CNtJgvkVNQ8hTXk/jqZGdtGGc3puLtyHwM33qnt8CWpFW8f7L0cO+OaHlzo3i+M8TIfwnDBbmBnSdRe0cqYIwkKYIY5FHKBhNPXyyc/QiP/6TfFVumUJzAqROMD0x2I/hRnRt1rTr1RxJ4ml18eFS8QsnTwFCJ/1V3FJJbdkVyU8un71psTcvKw3CAjJBazsRXgRJjXuTU39VdE+rG+LvM0um214QW/TnSyZox9VmbuQHKbyeoQJ6dv4pWCySHbyUMhL8/aQgqK2AAFVb2A3zsVt6vjYXBe+MACaVSG+q3wrmqNIGA0YE6Ewx5m+hukCAz/+BNaI8YFhtMOPqxDWC9XAqwgeXvBtGKlPTX4io2yzQ/Usz1WWxmnhW0lI34QPpIokAIj6V80dM50QbovIsVPDU8ouuugAxWmsUMUUuRpohwStOBoymkGFZBjUljl+gA5ev0xQQ9O2yhezcLybbEtjdFnAKBPuPDIaqV9iKP0qAuzCTVcNJW1rK7P4RehFMNSDd8MAL2IUgq3quh7YUhHnEB49LrDGbvl0A9PxWw0+0TfknJQRDYembRHkXos+GUZWSK1v9JpAqsf5ny+FLX+RIvZ7LvG3NwqFDHv/8nJbORkJ9GJIlMMRO8BX92b14tXi0qCtEx9s33defq3qgiCN9b7Jhd/1ctBCYIPJ+DQsXIv/NDYR4gu4nIWCNm/xcK6qCKwQESfVxZsUK8654wiyA==';const _IH='a0cd0d530aaf772abeb046a321532b7e99302d00b66040c1f1f1e782077963b4';let _src;

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
