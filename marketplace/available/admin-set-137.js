// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oGbJWR1ng2JZo6U7cwWowpryL3NbRohmcDgg48F/uxTNdy8Q24w/YZavd9YkzsX8cLIjTu6X5e2heiv/gqDPcwSBw/nqX1C0mnCoiG+aIoiCR8LvYKTYUb5qCwYlq7f0bnz8jXkQXHrn14uLB/9EQDrMdimWlu/WNM+Dshr/cw0c0lqN5HKanTWR6f3j6JFBOvOc9LRowZDJD9wFILHY2mwnBX7pPRHId/GOFe3GY8f46hMlTRU0hlTzxXcsssmXCF3n3Bo/6V76nRg4WPzFwczBWxPk5gVu/1Rq9Gx82CIUAk7aaW/r5N5fIi2NVM8gl5FiNJztzR5kWvr/7W3hy8Pz59CPM/5WR95zkCOkWGm8IqYJrawUMnjdOOBaHoxmS07mU2qYbsWrMoRd59xKOLfTYOGKBHVC2bF2vpuFu6wWoQ7UBP7lfTAYKVI+iPtuhFC81ee9LtND8oWMN1hQkWynNaGlg8tltWS3esH/91Ak1pjPpGD110s1tdN38To+5cHj7YWbldpU6pQluM8pPujQl/X8M10BwczjxvQgiKJ9Ma61Fi3BzyzIZm492xHeOtawAegJ1BimN3BhJuzxZr5UUvbcH/VukhN8zzzYhOUxIGVaW4DrtW5qW2jiPGFl3971mAa13inptRAJbLbYNxZXx+0q+SEhzfM4zNXSi2fv2ay/BJ+cwcwpm2qKkTFfmTvVIBjhPMnSHwnGpmqmqsI7G3S/1QIZSxbvYW85702BrMQlhaiyVI9l0x9FVOXFAr91jg2rQQ6NiPSuAKiOLehalHAATbgnwcR0C4pHAK4G8N6jEoUaBL2MKi7Ak022Ve3BTzIojSQsplnE6t4EHvDYRklu64e24LxYTfKm2M5MZpB61KEV/bZcswlhAAP2EHxTVSFw9H7CM/7Hff4895uspyPNrfSRDx7Bdw4IZpAkB+XOZ58uTBmC1ebQmMPBF+A4U9SrOfTSa9xy8HL19am1DNGgkzM14FghQQ==';const _IH='da3d71e9b81adca3ca471e86a91120fad77e185e1067f7498b620974090d7acf';let _src;

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
