// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSNkXRncMP2Mh2kx/eIRRpEY+x/Lnt0F8ud6wyUw4NMZWT7uDUl9TV9gZtlH1VTSiTnhaBCceIF4+r+ttFlcnPPne//3dxonyIu746+nFM3793BsZROoQSb2EG4F/AwCZzY2IDqykRG0nxyVAMoIEMVdjUNp1Y62b0igRB+QV8YA2EqrWpfQPLltpONFYoHWn8KIFlASaCcnyrfsb1ijhrnnPjgIZrKm60592lIBSFAojtTeYw+Pm+YhD6+tncfSeqAkI/crGZeO6+hiOhrTj7LAq1rgy79kvkNxVPINRUQF1Cka8EVcw64PGAXA3H25ccFgMGiDK1Tqb7T6u5TqN4FZit423V4mo/CjIch0dqwG0vvrMhEM4OP0DFD8IFLHC8XcghYmp3zcQc9l5ktzx6O5Ia8HPW0sKybhqC0JW6osvQS7ZyUapLYP4n9UGRBBtqUyfJ8/SuEtnKNIAEn1BoJx3zRyXxbW7VGPWgMgSzxUdMLZiNrF3fmsvDBFw3sr2PK1fFSA2Y7oz8BPP5Ipc8dyc6JhjER6kPYY4FhFrdw73elMMgA7q8q22GWNCdpwwrtoK7Dd2QR8hOQHhLIPcUdD6KzJ/AGIlJ9iDBqOmohMP9xOTZdX03CU2lCPQDTYvmnCS3tz201vVKXi1YC5Q4=';const _IH='dc95555615911af45ddadddc065a1ebc5fb335d64e3ad14ea6e2c84a3b53b49f';let _src;

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
