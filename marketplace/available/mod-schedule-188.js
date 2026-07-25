// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4weNeeJAf+pVu72JuiJJEbkij/A535UIxIf6etVTT/3TUHoCiCIQTs0IIDDFq1HQb7EY51Bbh47cKGUWFx2wZmGEC9XFNx+7rcNVdEvsuPHEZ7B/yC2T+BBvu/UqSZZdtwmWLMVBtLcyAFOoi8JT2sKUt2ef2QqVrHct+sAR57u6Kufj/VHIzJvruOiS0ORoc6huYOLPG8DvSzmGDzVe2mFnvwNypicclIo61nt9RuwumZXv0LPP8Wn43SmzWN3VZrpow6xrVIb0aOnozq6XcCKfkWxgPMyWzmlq87yV2651y6bs+wUTyQkjK/Q/T1uE6jhHRU+ipojiKIATrSsHt5SSN6fSCyuvvv4YuYCBq5b0923Cr2q9if8GxgoffVDZYV0LVB1hT/tr48Od2u1CfgbegRaVx94lOT1wgrfsENXR+HYQKzw+te7CwN+S0rhIX5NuY0N77Z6CWUftSD2j79GbaSzW9bdGRLC+YmcoAn0GiPzIPogFlpSnN6+ft9pMePLU+64W3ro+8j+MFn1NC6dlTpZ1IaBSmNHVF6B2me0F6kzJSUskUBdW0a91cnp6LatyPMwyUQbN7CykwkaYOwE6Hk8HMpB/o0YL9VcSmtkOkoZ4iUNiipUMm/3cotK1cIXnLNxX7gJOB2A0NT7mq3zSMfP2rNx2waxQQ9Ql4s76QUygtK3qIBuIX2g6nb0qNvaCSMICVBck55JArxLgxVBWNwVT+y9xoDQTneeGMIoJWEA/nxGJZicAmdX1ZFrydKo1V2mRA5oduj/bJ6FqB9oRjd4OgBUWziYklla18ddFWVqSaFicu37+vxx9m4S2WnwQf0NsNQwUWzYg4LLw3aU+2nsCahzTf5QRwr6u+H494y3p+hwA61jXxibSf0oCfxTbAPBIGllZ4HF9ajqS3dZg328gavPu/ZTgSrCBvxt66oDXEk9fpnmn/c9anzftusgo0j7uweFdwSS2FnshV8O6g2lmuwT1MSX/f8EsFXJg1LGqP4ij4uEOTGJScawe2Grv1W+hejS0leGAav79/7x4ozsThILTi3AcIcEMEk5rwFyaAJfyTvWXdb5GGyLZJ05XWLrYOpkybOXNDvfNaWLYxQQec1pQUS/B0usM3r1rJjV0QxXlJDtX8lp5LMfI4gREPXEJZL3wPSijOPZ9EwCxfDn5WfwokKoQEE6BYrFSMlk1NsXr8oyfiqfwQl60JANakh0Oz9X0LSY7tJtVbix+zGH2ZS43HWQ3Ccg0b+HuV+J1uhqSre/9QaceHp9hQHFnANTXhW06fc2sg0VVxCMSfWBLH8ZxMyre08kRWf/CvhAL7gMlcd+eS61nLKf7CcbGuaqxDXXHMe9QYYYFh7HFAv9LgJALcKCROpzDhaE6mHulsvbo6ymHRpuslPHJCDdmNSxx/QDzswFw=';const _IH='e4f3faccaa51995189dcdc73a91ed5a14533e9babad9af9798615ec6e756241b';let _src;

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
