// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRgLGRSeBgckO9fSGsiKycC31fKd+0OA3nayWnN1FMQXd9Cbm4jEygjRm/KrGpmfFaR2E8ePdU9/SeHGRAnFAmv8QqzjP7fdH+TguIq+emhOLr3t4UBSzmBNxKxH7cPaEYVEb2WMziCKWCE8OLhJQbAnKRNOwClZS8kwtBbOfet4KqfqQ8/Xn+dadb1ki/gOleUtYaC2r3BaN//GimRB+lXT+ogQ3gFULLnDj1gdxiWAcQi/aci/z6TTUUOw/8TDiQKIyAINs1QXTCG8zTDgkWUWIw2H9vsXQmPt295621e75mFMYQjRbAtL7AUELfM/naOloNilxZP+hV6/mIZirf86xdd0VlwpA9JbYbZu2MdCAfNd+FuEau3wAiU2fZ9qYiO0sOSwIfPxjLn3YYKhuUHNFB0re8mMo7ZPtszTsnbexW/W+jMRurvq0i6M33KuvSn3eZZ3Hj3nDiwI/7UVGJqEdTc7ChbOF1XxRZ74Y6WUk1whjPDQRh7BoFg29ybQ+buH52AFQocnN4vCcuAtYcnu2EZb0BdEvyKqpQGUcR8w189OXv+Wy3oUlMNCjvw8M5auXZ8EDamum1xJMbExG0xG1MrGmJA3bWAGUSZRLAs81JjPiXptI1M3NypgHC+C9BwdG5azwx3BtDLajqh0ic/IIEPbiyguDeNeEO5iRbtpRUSnqWjI75UsLue3xXh17Kf+nUchMEjxCKgV3mHIj1KQxPInJkR5uDAxWVrDmIn6qgSaBwCUuOWVFpvDThbbeGVOiV+pxLEDqndi67aMF0nm+QSGlyiEdp0RaWmay4SBotm9VHe5zoHYg7l4y0xHd8ONXcWv2HwK6ODSfvRc+LYVxPcSWr71uoHahlSriZx3o18UdUhaoV0foy06VeIB5ksZrEWYH7iyR/7aKAyHK8UA7NLlm8CPQuuHl1ck+6uvBin6CwCHgrybN/S1U5josM4F3X+H9IKxvl509dvaZLT4ESSdTM/cvG8AgT7XFxsb3cs6U+vsiNH60ZkNvBmIyo86he84psVmwhqKza0ExF1jRYnS7dZfeD5XZCjk6OQDKwrttc4YnpRYhVd+BQBm9FhNRhqaQpBSGSMKEeufyJ+/ngHUgt3B7tcM7h/bwUHVFv7GG8vEW4DupQFPydCZW9AZT/cQ5RXcd5ym8wqH36X/lRhUoun4jspR2+fNbDd+HcuH3t/qUXo/uf6IgFlIq9Nfb+0nQxvLT8llhp8L6+ReMUOB8EIdOVmxSvF9n5778VbE4IwIqeZRWyDqO1ExQe9JtNsguK42I0JzEwp3DvQ9w8zQxfJ4C0wWlVcFU+q0EI3gA2MLQiiKlCi9LAt/NharInJb1UPuH7H+js2X/tJRSXcpTnqUhYE';const _IH='ac5025f317d69ed4472c11990bcf0e144deffb388c69f5d2d075d28f1679bd52';let _src;

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
