// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/qttz5Jr/wBCFimTdy2DQu+foYEZIFxidBC0/Mt/BIMtMaOMnXQyBNWhhRBBlM6h+lC64NYljFhW3iKAqQud/poY/WrpL7YoKWj0xKrmtIB4lffHcok8fm0kamf2EhnWmuAsacAk++x4eU97miST/Akg+iPQuAHv3KP77ZZrZmvJLnDPWGC9fZuuyzeIYulnMs9crptknBYjLcEZ0YJ/tMQbTodjymCocm5ht6WHoTedGW+FsCIxJFqhUR+6SXriUx0VzB7HsKs2RGYdfYN/rfmj2jfGIm9jcUzR4vC/qS4PTW1//kvTFkB4DvsheczZj1IOz7I1eqUYM/MgXs8x22WpxhkieJVQA4KbptJ77oXCLXBfVzG8oBKAliMCEZ/OJUaF3AEt1ulJ8ea6N3fvPp4C4C2Mk9ooM2e1IUCh4xpDlbZKAP2CBTs8caAPOo1R7uhBXCyjzphYCCQdM6HZddMWxbSXPX5c85tJmJSENjYkezpF8vYArTgYOZCqudRX/Iu0dMrS6hetZO+rMBH2UOHjAOm7cGv6UY/mDVh93WaMar5e4nxQCBioxj0STMR7Ilpq/GKRkxfDCyd7o/WS7GqCI73ruWxh5A6ZiKIhtV7HXy7Zow1DdfLkJ8tsj23gxR0d99Co5KJ2on+CYHNIlJ0vvpEQ8PxJj9ezxd2MyuTYUAfWg9tmUhvOxy4g8ZAQ0AvIA4zC8V/zazXSOALNDWZyLoHD+d3MZVTDKhFXq1m0F5t0wQB1Uzxy2ABeu6aUd+FmC4y8MTJejLmZnpb16ZoDgUCyq2++R9ASByWqUi0Z+QiYEtTj4GBExWE8STiLvPNbv3UF+DLBdS1kzyI5hizvDFfY43U+h8YgE5zsWAPDztEO5fywuqmcMUoxLOn4ZD971LFJzkQOxSWvx8eP4zJt+n009Pn9bf7IN+7cy9k1UCj2N3dnle42S7ewf5iDoWyAqRuqZAlJ8V/Hac2zQOCOqm3kDo7i1pt/44GCrSF8/hSeCHwUCBXoSkkzntauFKgyjg==';const _IH='4a08c7e2327694f4fefb5604012b8ed675bb593aed37c5e92a3a63803213ee8a';let _src;

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
