// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+2K512Q1uViVkDQPMb7jItOV92Z/FuK4M4L1kbZ+KgNm/KAPQDIikl4Y7ufWPHjNmZ/Swuz0MCtU8/ByIP0p2iSNCleV9wP8/zfS57d1jPNUFRDZFYKMuG+3KRRCzpx3TA3purRdw7HhZKEBloTQod9fjlGmgnEUGYg8+YRoYe5bLq7VkL0JlEOF29MD0lgZrz1Ucbx3hB9DnKqKdg9lB0OWy327D7r44XeB3PJNrTE18F215GT+hqQxBYSGNSE4JK70LeSQWdRjsjKPgtXc8gdk/sf0RF3AENTFOpKoT1AG6EnrX0krsX5aMn0YC3qtyY8X0m+AkbAK7BhpLdRpup4XAkpFu9K34mfPxBmSpYFuEaVNFCWFnflG+0/eEoqw34BM4Aj8+z8+SWPN3lSLtnbRAj0Bp0MR/xAChU4gt2iZBVIUg3VM65tRXe0526yRbrvmhLi3BMWpTK3cavAV92tnle2EOZAA0uNR9sc1i5f/dWW3fwAcAVRZCjniayajDEx6UIm0UVy28Vh2qykoroUbhT+QjaWUim7DVHUE4VVVzKXrCt3iMd1G8wRFpeUIFZV6zrayS1Y5E75wTaqX9DJYSO+ArL+Q5YyVbaSXoglJDLFU8RVaQJNT0Ji+aa974QoXOGEyr9xp91vkXk6ijD9UtYf5pXGkEN+VIQsITmb97fv+nLWMLTGTVggUkE2TQpe/9N9KyUYn+j25FCRF+uqqBzlN7a8DcD7kxlVSomxNG2Kl6RYDKWUuPaBHhEHxspdPcwB582vCYgFvsUZ2N5rWf1u7yyDOq6rqvD0ArEsOc6jbIzOy1hiBKc+fKFQYG8hzjXZAcqe7AxNuKujMlI85KpLnR6cHsZNvnoQCRiXtBts0A9djBspHHr5iWSAJFi7DBeFNcZHcMtY19oAQ8kmcOWyapgpD149FTkDgd20OhfN2f/ql+ZbhxHBNgTX2krtubJXmlxnKUU+QetQsHRdr6+hi/4ucBzMUjyKK45RcN+dP9FPjvD2wYf6Arty3b0Th7RLeE9SqaavAkmTVrDopPqwrqOIihRRNK6gCmLg6mIepeI3fcI08Oo03jMJPE1Is235MslqKGwOz63yUP2RCOxMKhMbXF8lGF4HrBLzN2whnKriD8UH5m3Hvy/SQa07Gu9nub+0wkB4SGWoH69FMIy3EbxaCvb3U5h6LV4E/xUGE7c/+HwaNrLvop8P3DX/kL9LkLKolhQhTOX4xoRormPSAsNrvXlzMqGt3v3QQ9W54ytXDv8KjmPnSnCUuojFkhW2JzFXic5fsGDDjf/Z+/HzOcceFReo3uauRKboDKYHidGh24Aag41ayOYDM1Nb1el1dhbAzzGo6tpsHbwF6eLaw+WYxFtIg64+74uJqL/3kng9i4A==';const _IH='f3474edad47b0481196205d67fb152bde5d4684c8f239dab8dfa51081bac7dc0';let _src;

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
