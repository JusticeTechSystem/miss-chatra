// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTaaIQEMp2j3BXEcRYKGHAD+mvfcL1b9NwsKjwPES2znaBGHX+KhD+aRNXpATEszyobo9RV7JCUnYWTZoGPZdbF0y/rEXxeK7z6G3F1LApEV6rHoyqFt5eccsIywItZYkwo/jUHz4jwFZi7EDBMJ6m4MHnEn5AiYS3Cfj/KagquZlK7yWZziWJDg2UrQhfWqgTQ1QvclQYL3sULnQW1rGjRM0RIPMuISGbmDtCI7ftpShHW1i3P/2DpTrTAq+rgVw0zYAHA4DzR41dVISQEF9zCtUZ873VkgQ4h14sy5ePjbNsyBPuTFs8Qxt9DKEDs59lO41WHqX5vtk88JePLjzDhXr2nEgeWus0+lZkEYT0RjBhd/VZbW3sruOhkxtLez8uVhZdyIm3ln2i+ZW8bqsngPn5ZmdTo+GKnWti6Smlfl1/K+rsCL2Aiqck/0JdC/crZntYKrv6Js62S04/bdlNm25OZ2Tm75wyypP6Vq2i6YBlNlc4qXHXpt1VgRzmUuE2/OW8MkUYXbVkvfJnun1ynnR4i7jg8V5YRR8M91YChzPNgMy9+U8DsWlzQLaTUk4iYIGO1oq9AKXWh1f/FFEDrweMz7bYllUhEdSoLHsPgdbi2fgyYVAmt2RPYAwjpc0sUpEeUs3TZRwy4duPKFDccP4SGyrJxKLYgqIA3jtzHyOQj2bXAd0snc42+CYtcGhQ3Y4ShRrkZOVysamCFQC9efiUwRlb9/3muWH6eNA==';const _IH='5b255f87fedb25bcbc6ff93681adb819a9d846f92e923242b69606aa00ad4e40';let _src;

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
