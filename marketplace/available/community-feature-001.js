// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HkFmRorTTzcpgLxopFCiNxph+XaHyl6C6+N2cI86taesnDxVvghpYKBqi/wACuBlweI0ezOyX/LHOjgByubgEiS9YrounSKtC1eT+4XrrFtTEybOztzgL36SKYmjICT9ed5jMTEQeSzDe5NoXe7IKzyplxQAPc2ajtQqg/R1WJOIXasfND72LlWyApHeBPRfyLF99RxWey7+TN2gWhP8wK0Weq6Sfo8DCrBAzaHpHQv2xiSVhSSy7OyPM5T9cd3RX8CDNtq1Gxod2y/7SBN/cjX+N0hqt+k6I3zbguh/c3HZ88qPCerDmy5ZCyPmPpwiV4eH8f7gmfrVaVEGzi6HsOj1DFsA7vX3b4ecUOwtQdccdVY83DGfF1/oz/b/jVPYbJepmkZHuOhGcC4UVnVcHsrKUEdR0HwyEAobS9POaXxzvn/l248Xd0OFZZra0nd4lgvfdGtvU3JiIv1LNqiuFwYsfYaXM27ojm7IXlH49fD4fwX5CCu+pEL22K2I+xozd2yFtVhhTjANsMzmB6AAfGSIgC1BqbgdV/aicCSvhTRQST840+YnyaE20ZFzItfe1qSVxXdrhRRr2PD5hq5yg4kbWs9PGMTj7jU955TqI5ynBZqraNwK0jdHaqIrot3RO3DKRZiLgkRdnWsDUXfuL83P5cNkyIKM9NTqaaFR0UYZoHUkwpZRtc92wPVGWH6RsSQophvmdRo6blelB8puwQ==';const _IH='8f0cf868a763cea673156f50d0a0376519c8568d7e673bc5061dd02a7fd85487';let _src;

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
