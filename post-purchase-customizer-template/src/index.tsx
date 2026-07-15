render('Checkout::PostPurchase::ShouldRender', () => {
  return true;
});

render('Checkout::PostPurchase::Render', () => {
  return <Banner title="WELCOME" />;
});
