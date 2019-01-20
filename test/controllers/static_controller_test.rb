require 'test_helper'

class StaticControllerTest < ActionDispatch::IntegrationTest
  test "should get index--skip-routes" do
    get static_index--skip-routes_url
    assert_response :success
  end

end
