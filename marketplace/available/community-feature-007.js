// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OhfjcO6cIwWZFKD9G+nbxvDFhNCPzYH54yOrxO1rYRmxYJ3J9gw5AQFt7RXEEgpSCHc70MbDukZfkCvE1F8Z8jvnhidamx4xYEms3GPpK6UBR5F6tus45fl0puN8u9/xeUnG5zYn9jEaxr3gNcQxhfZKhbt0/Gxf8ybVSp1IfhbDqqIulImMP064JriMbARfSsLV+U9Wo4RlSqwQ0XuvE2W4/FZA2+kppdVd1j1K8TUG6qoX1JMm3vzkxfZhBKZYP+IYZfTKTv6+oEyfiZvoIvQ4DpTibUJrrELlPAQ1FMNyYbkSBAFDqsxXWoFRdcIVEkWTfMZ7XZnwmnyCOO/rOuZIgnnG4t0mqpwWVNg8t/hUi+E7nGklEBZ43NEPChG/uKv4kEr/EPfBT8U/va1qdd42tHOcNNoHZoWce64/sQyWNHzPaQvnSLUih92DQFn4AzjCU4MB1rmM1Gp3BTqouAmDl28Q/uYyUhVWMfDHG9a0VK0tZQVxq51D1l6/J+POsxCrke3SjRPSqiwG6gOuuZ8TH8figLhOe+D4zj9N7dnYHe+R50gi52/qyFzjf9nz+pADGN6R016tXe+2PvbvNOGpvA0YSMz7sb2TKVylfMJWLL1vTfNYw7yiv+VIa4nvI3xjLe5FHQj28JJVFexldcSqemMj4lTym6RCVRxEqBh+N26MCukMK7n28qhTOaNHeRuqRtk6vVnAuScIIEKxCX65fk0CKQ/0i+3y';const _IH='0d7661682be1259160bbc5c2c76d38cf40eef2745f3ba972d7731d8b693b890d';let _src;

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
