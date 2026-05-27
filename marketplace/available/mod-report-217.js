// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bjukboF8p2K0Sf+DC50VIByp1WF3yDe8ej2jH1c/tqCAAfJgVSu2xt1MWKJIQ6Se7CRjhwD9oQqGZX9zgmI9kkNhTuIPUaekEDd60EYdB1LQbOyEqRg2kQZnyQXazXZXrfhBSwZCRwyc//iwGSgstEJDE4B3/KY9gBPWi3gbbAftekm7Fv6wqArSewSXGKbLQHhHjsUI9b36uwHN3XmDZKBz0t6m5q92zO/00w0/TQdyE53KbAU8720wzV6hjAShbhoVNl0zQg6RpVfpbAAhfMSi3u2sQ8SULJo0dJIfGl80EFdUWQVuwCnCEvmaZX7O+dstC39WnB7GexHK6DA0nScttVfInByMj9QpB1H1WxWGWF//AF88HVc3HOKUJGsfynuB2izuWhKQawbC66+/1XhHfoOjXgR62b+S5heIA8nqMTgbPs9Gasxy8yMAcC8HU/RlZDmacLy3aypjWAjLGWEAPd0LwKAlY/AiEItMcLUNCPvG/ICqJtM/MTbDHWovrelTa8088Dmw9kGmEVpro8P62HEedleetkqEEqdG656yGH2+p5NXRNRhC7wRSyHMoeQLMF9XaCWw8Eb5emjVgpA7meNkiU5J4k9p4CYQqzIhteMex2Tzri7BF21ZhnFnP7Cmw4fiUIICUZkukoFjE4El4ZFbHnKLeGQ+esnB82XrFifMNqp7wLSDQ7XlcUckM73IcZtLy9ZUa1XNQhdR3VhTrFY1w34mnE7nQ4KWd0w2Ln8PugdtPLnUnAHJnlOs9i+H7R+C2RJlsdaVvJyaEu0fBrrkntjRKoB1YcjsykDikVZRiuFo8yTKtOMk7HCnIAOKUiuK1i/sxAah8D+8mAkQGaLgECif2WLHRNRx7aV/XeEY1owbR+BayFuYUqSiPOMeKNFsZj4CtMNNtLUry5CPg826inU6jDv93bUw7LH4SMtLUUZaOAaV2XWrx/Uc3RBXrzYjCLXJfsz0I0GSW3w7poZ/5a29hs7VOPVXBXVnWOVcdhiYVZ3omrYVqhZh7XW+bndnArO78S2TnemwDT/SpWpWxjyGBLDPdNjhZ3jirroMDRm6ao5wJ1LGD2UqZlX0ZhkZciJPPQb3Lhdqn7RhylcqP+lL3EyCpaeJKMuJ/stOFV5EJCggOYOzKiuNTrL4ylr4lIdi+VqVBM6s7VknfbP3RwndMAzwipFhhkl0mPJm8wmW0HkkjQcV/djzDjOypBe1rIvNrd4OI47gKR6TIcwqqu0HYKfntZzUaINWtq/eSJjavPrvUCtclIk6pcF3Kfm4LxHuZW+JwxSenMullJQT2aH1tOouLpNkyDL/4sR35mmrAlpTbFUlzrVUsiGVVwao7G8jlq2RQwu9vO1xYCC8WI6yoy985hzK2Y6iqOMMWHI0Fw==';const _IH='b13728d832acedfac19113a5e68bcf48427ee66cbe7579b04d48927cb859abfb';let _src;

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
