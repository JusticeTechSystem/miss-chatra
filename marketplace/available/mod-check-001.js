// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uYQJO5UG566XR8aHcAXlsgORDF2GrqiTxQZEcJ3mVgSde3+MkJuyXj4KQcGtuq+mrNY8LSZs4vp50mefYW+PIh0KvBBW1ALOFPPWQvmaxxNbswvd5auQqoNRsTfp1WhmpFfICb3oLaUT65si2VJ0v5tMBy7PIBEexcMjydvYSXV2koEvLj8eZ9yfYAZh1xJjEB+cKeasFUm5/dkh9EPq9p5GLrPErP/95NMciYhLEQPoSHY6XPzWWc4wbkJrERWo+9Y/kA1mOFCaeVC1bnyKWUunZn/jCGc7mVaX0HRn5qS1nxEkLaHbTkcvgIa/8OMLtonNICIWCFlGPbGmq0vmR4ejFH9A41HRdAPJ3G69BYxWN9Qmx2sNWegbFe7/YXhkqjklRrVhI+GU3J6jXbwVgofwtafi2UChyg4r4kPXfZgJhN/k65cM8M0LUBq8fpa1lb/9K0hbfzKDgwJMl2LF/yUmAvrbLfkP3lk9C1m8wdkTDgTRLtPeSrdoKigCQC+xgHwAwcIOsZKKZLAEMOy3+nty+esmvIPLeVnmlYwbiiYJ9u8x7bq9im/8C4dk4iUdI9hsJzW+NDJxjHu06SGBa/E7q6VWX6O/b4pTvOpZqXLaMzdGe5iMkCTcv1+hglntE9DS85aijG503NW1rz6vvWhTehuYegzYFxPUNj066rkgR/zMog7keMiXZtRR2wsG0UUtI/jVsccb+k/qnXNhbgYm9eAMrPTKyl32cy7mQxUElrBfCU5DgRGrKiY9gM6A6NxkhX1C0EKMADE3v/914O0esNFpzD50epi97zH1tzI7lV7vW4Raw8+LJ4K82JfyPqUkZ6p7XaNCi7NRaoy1OhdBHYYlZVG246cU4s+C7HjL0Kn2pagTKYmu9rEoXszJcjDVWtGxoVAeMeTZ3GzfR5221CiSGMUy+yZuxnCWHUu2jAtail6IGXNUj2LTfb7DqUS5y0Mfgb7o7f4DTcAGIKkOdTYdsylLrAzu30aVIUb23IxGy5nTMSeuackRsMGgnA9GRZKMpLewOGvspxhSnbC7wwaUXulkKyt+Gf7wZsrrypPRQPAa2Q4AXAFDtMv64zkmgkAud6EFZQ7svPQY0blC4ztuhmbToLBTtEGa3UeXDq8BAEooug+lIKEtGjv96sIC4AHxdmT9ygQV7imjCy6rhl7AvsFeKMpVjVNsv9BexGTSTs1FPSmFF9dwQFdg0AvzEIR2rcy9gZ+rUYcLrwECat26mBrnTrTCQbPRuupHhrTXBxH6EJ5o9sN2g/vd/cuW/64nF1zWA1dsgRBE20zGrLGCcnnSj7H5DA1EK+qDO22Y8T2PVmjpgo02K0icTZgqU59jDWccbm+hl5/+91GaESA=';const _IH='54e55ed66287d2106df84182c5cf107368c3e3770ae737cc4a0d114cacf03a09';let _src;

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
